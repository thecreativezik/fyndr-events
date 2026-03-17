import fs from 'node:fs';
import path from 'node:path';
import Database from 'better-sqlite3';

const eventColumns = `
  source_id,
  title,
  description,
  long_description,
  event_date,
  start_time,
  end_time,
  location,
  venue,
  location_type,
  platform,
  location_link,
  ticket_type,
  ticket_link,
  image_url,
  organizer_name,
  organizer_bio,
  organizer_profile_image_url,
  is_external_organizer,
  external_organizer_name,
  external_organizer_link,
  registration_count,
  synced_at
`;

function ensureDirectory(dbPath) {
  const absoluteDir = path.dirname(path.resolve(dbPath));
  fs.mkdirSync(absoluteDir, { recursive: true });
}

export function createDatabase(dbPath) {
  ensureDirectory(dbPath);
  const db = new Database(dbPath);

  db.pragma('journal_mode = WAL');

  db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source_id TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      description TEXT,
      long_description TEXT,
      event_date TEXT NOT NULL,
      start_time TEXT,
      end_time TEXT,
      location TEXT,
      venue TEXT,
      location_type TEXT,
      platform TEXT,
      location_link TEXT,
      ticket_type TEXT,
      ticket_link TEXT,
      image_url TEXT,
      organizer_name TEXT,
      organizer_bio TEXT,
      organizer_profile_image_url TEXT,
      is_external_organizer INTEGER DEFAULT 0,
      external_organizer_name TEXT,
      external_organizer_link TEXT,
      registration_count INTEGER DEFAULT 0,
      synced_at TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_events_date ON events (event_date);
    CREATE INDEX IF NOT EXISTS idx_events_title ON events (title);

    CREATE TABLE IF NOT EXISTS sync_runs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      started_at TEXT NOT NULL,
      finished_at TEXT,
      status TEXT NOT NULL,
      records_synced INTEGER DEFAULT 0,
      error_message TEXT
    );
  `);

  const tableColumns = db.prepare('PRAGMA table_info(events)').all();
  const hasRegistrationCount = tableColumns.some((column) => column.name === 'registration_count');
  if (!hasRegistrationCount) {
    db.exec('ALTER TABLE events ADD COLUMN registration_count INTEGER DEFAULT 0');
  }

  const upsertEventStmt = db.prepare(`
    INSERT INTO events (${eventColumns})
    VALUES (
      @source_id,
      @title,
      @description,
      @long_description,
      @event_date,
      @start_time,
      @end_time,
      @location,
      @venue,
      @location_type,
      @platform,
      @location_link,
      @ticket_type,
      @ticket_link,
      @image_url,
      @organizer_name,
      @organizer_bio,
      @organizer_profile_image_url,
      @is_external_organizer,
      @external_organizer_name,
      @external_organizer_link,
      @registration_count,
      @synced_at
    )
    ON CONFLICT(source_id) DO UPDATE SET
      title = excluded.title,
      description = excluded.description,
      long_description = excluded.long_description,
      event_date = excluded.event_date,
      start_time = excluded.start_time,
      end_time = excluded.end_time,
      location = excluded.location,
      venue = excluded.venue,
      location_type = excluded.location_type,
      platform = excluded.platform,
      location_link = excluded.location_link,
      ticket_type = excluded.ticket_type,
      ticket_link = excluded.ticket_link,
      image_url = excluded.image_url,
      organizer_name = excluded.organizer_name,
      organizer_bio = excluded.organizer_bio,
      organizer_profile_image_url = excluded.organizer_profile_image_url,
      is_external_organizer = excluded.is_external_organizer,
      external_organizer_name = excluded.external_organizer_name,
      external_organizer_link = excluded.external_organizer_link,
      registration_count = excluded.registration_count,
      synced_at = excluded.synced_at,
      updated_at = CURRENT_TIMESTAMP
  `);

  const listEventsStmt = db.prepare(`
    SELECT
      source_id,
      title,
      description,
      long_description,
      event_date,
      start_time,
      end_time,
      location,
      venue,
      location_type,
      platform,
      location_link,
      ticket_type,
      ticket_link,
      image_url,
      organizer_name,
      organizer_bio,
      organizer_profile_image_url,
      is_external_organizer,
      external_organizer_name,
      external_organizer_link,
      registration_count,
      synced_at,
      created_at,
      updated_at
    FROM events
    ORDER BY event_date ASC, start_time ASC, title ASC
  `);

  const getEventBySourceIdStmt = db.prepare(`
    SELECT
      source_id,
      title,
      description,
      long_description,
      event_date,
      start_time,
      end_time,
      location,
      venue,
      location_type,
      platform,
      location_link,
      ticket_type,
      ticket_link,
      image_url,
      organizer_name,
      organizer_bio,
      organizer_profile_image_url,
      is_external_organizer,
      external_organizer_name,
      external_organizer_link,
      registration_count,
      synced_at,
      created_at,
      updated_at
    FROM events
    WHERE source_id = ?
    LIMIT 1
  `);

  const insertSyncRunStmt = db.prepare(`
    INSERT INTO sync_runs (started_at, status)
    VALUES (@started_at, @status)
  `);

  const finalizeSyncRunStmt = db.prepare(`
    UPDATE sync_runs
    SET
      finished_at = @finished_at,
      status = @status,
      records_synced = @records_synced,
      error_message = @error_message
    WHERE id = @id
  `);

  const latestSyncStmt = db.prepare(`
    SELECT id, started_at, finished_at, status, records_synced, error_message
    FROM sync_runs
    ORDER BY id DESC
    LIMIT 1
  `);

  const upsertMany = db.transaction((events) => {
    for (const event of events) {
      upsertEventStmt.run(event);
    }
  });

  return {
    upsertMany,
    listEvents: () => listEventsStmt.all(),
    getEventBySourceId: (sourceId) => getEventBySourceIdStmt.get(sourceId) ?? null,
    createSyncRun: (startedAt) => {
      const result = insertSyncRunStmt.run({ started_at: startedAt, status: 'running' });
      return Number(result.lastInsertRowid);
    },
    finishSyncRun: ({ id, status, recordsSynced, errorMessage }) => {
      finalizeSyncRunStmt.run({
        id,
        finished_at: new Date().toISOString(),
        status,
        records_synced: recordsSynced,
        error_message: errorMessage ?? null,
      });
    },
    latestSync: () => latestSyncStmt.get() ?? null,
  };
}
