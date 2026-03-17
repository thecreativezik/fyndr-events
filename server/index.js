import cors from 'cors';
import express from 'express';
import { config } from './config.js';
import { createDatabase } from './db.js';
import { syncEvents } from './sync.js';

function parseDateTime(dateText, timeText) {
  if (!dateText) {
    return null;
  }

  if (!timeText) {
    return new Date(`${dateText}T00:00:00`);
  }

  const match = String(timeText).trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i);
  if (!match) {
    const fallback = new Date(`${dateText}T00:00:00`);
    return Number.isNaN(fallback.getTime()) ? null : fallback;
  }

  let hours = Number.parseInt(match[1], 10);
  const minutes = Number.parseInt(match[2] ?? '0', 10);
  const meridiem = match[3]?.toUpperCase();

  if (meridiem === 'AM' && hours === 12) {
    hours = 0;
  } else if (meridiem === 'PM' && hours < 12) {
    hours += 12;
  }

  const iso = `${dateText}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
  const parsed = new Date(iso);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function computeStatus(event) {
  const now = new Date();
  const start = parseDateTime(event.event_date, event.start_time);
  const end = parseDateTime(event.event_date, event.end_time ?? event.start_time);

  if (!start || !end) {
    return 'Upcoming';
  }
  if (now < start) {
    return 'Upcoming';
  }
  if (now > end) {
    return 'Ended';
  }
  return 'Ongoing';
}

function normalizeEvent(event) {
  const registrationCount = Number.parseInt(String(event.registration_count ?? 0), 10);

  return {
    ...event,
    registration_count: Number.isFinite(registrationCount) && registrationCount >= 0 ? registrationCount : 0,
    status: computeStatus(event),
  };
}

const app = express();
const db = createDatabase(config.dbPath);

app.use(cors());
app.use(express.json());

let syncInFlight = null;

async function runSync(reason = 'scheduled') {
  if (syncInFlight) {
    return syncInFlight;
  }

  syncInFlight = syncEvents({
    db,
    sourceUrl: config.sourceUrl,
    sourceAnonKey: config.sourceAnonKey,
    batchSize: config.syncBatchSize,
    logger: console,
  }).finally(() => {
    syncInFlight = null;
  });

  const result = await syncInFlight;
  if (!result.ok) {
    console.error(`[sync] ${reason} sync failed`);
  }
  return result;
}

app.get('/api/health', (_req, res) => {
  const latestSync = db.latestSync();
  res.json({
    ok: true,
    latestSync,
  });
});

app.get('/api/events', (req, res) => {
  const status = String(req.query.status ?? 'all').toLowerCase();
  const query = String(req.query.q ?? '').trim().toLowerCase();
  const limit = Number.parseInt(String(req.query.limit ?? '200'), 10);

  const rows = db.listEvents().map(normalizeEvent);

  const filtered = rows
    .filter((event) => {
      if (status === 'all') {
        return true;
      }
      return event.status.toLowerCase() === status;
    })
    .filter((event) => {
      if (!query) {
        return true;
      }
      return [
        event.title,
        event.description,
        event.organizer_name,
        event.location,
        event.venue,
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query));
    });

  const safeLimit = Number.isNaN(limit) ? filtered.length : Math.max(1, Math.min(limit, 500));

  res.json({
    events: filtered.slice(0, safeLimit),
    total: filtered.length,
    latestSync: db.latestSync(),
  });
});

app.get('/api/events/:sourceId', (req, res) => {
  const sourceId = String(req.params.sourceId ?? '').trim();
  if (!sourceId) {
    return res.status(400).json({ error: 'Missing source id' });
  }

  const event = db.getEventBySourceId(sourceId);
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }

  return res.json({
    event: normalizeEvent(event),
    latestSync: db.latestSync(),
  });
});

app.post('/api/sync', async (_req, res) => {
  const result = await runSync('manual');
  if (!result.ok) {
    return res.status(502).json(result);
  }
  return res.json(result);
});

const server = app.listen(config.port, () => {
  console.log(`[api] listening on http://localhost:${config.port}`);
});

await runSync('startup');

let syncInterval = null;
if (config.autoSync) {
  syncInterval = setInterval(() => {
    runSync('scheduled').catch((error) => {
      console.error('[sync] scheduled sync crashed', error);
    });
  }, config.syncIntervalMs);
}

function shutdown() {
  if (syncInterval) {
    clearInterval(syncInterval);
  }
  server.close(() => {
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
