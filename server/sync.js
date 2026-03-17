function buildSourceUrl({ baseUrl, offset, limit }) {
  const select = '*,organizer:profiles(full_name,bio,profile_image_url)';

  const params = new URLSearchParams();
  params.set('select', select);
  params.set('order', 'date.asc');
  params.set('offset', String(offset));
  params.set('limit', String(limit));

  return `${baseUrl}/rest/v1/events?${params.toString()}`;
}

function getRegistrationCount(raw) {
  const candidates = [
    raw.registration_count,
    raw.registrations_count,
    raw.registered_count,
    raw.attendee_count,
    raw.attendees_count,
    raw.total_registrations,
  ];

  for (const value of candidates) {
    const normalized = Number.parseInt(String(value ?? ''), 10);
    if (Number.isFinite(normalized) && normalized >= 0) {
      return normalized;
    }
  }

  return 0;
}

function mapRemoteEvent(raw, syncedAt) {
  const externalOrganizer = Boolean(raw.is_external_organizer);

  return {
    source_id: raw.id,
    title: raw.title,
    description: raw.description ?? null,
    long_description: raw.long_description ?? null,
    event_date: raw.date,
    start_time: raw.start_time ?? null,
    end_time: raw.end_time ?? null,
    location: raw.location ?? null,
    venue: raw.venue ?? null,
    location_type: raw.location_type ?? 'physical',
    platform: raw.platform ?? null,
    location_link: raw.location_link ?? null,
    ticket_type: raw.ticket_type ?? 'free',
    ticket_link: raw.ticket_link ?? null,
    image_url: raw.image_url ?? null,
    organizer_name: externalOrganizer
      ? (raw.external_organizer_name ?? 'Unknown Organizer')
      : (raw.organizer?.full_name ?? 'Unknown Organizer'),
    organizer_bio: externalOrganizer ? null : (raw.organizer?.bio ?? null),
    organizer_profile_image_url: externalOrganizer ? null : (raw.organizer?.profile_image_url ?? null),
    is_external_organizer: externalOrganizer ? 1 : 0,
    external_organizer_name: raw.external_organizer_name ?? null,
    external_organizer_link: raw.external_organizer_link ?? null,
    registration_count: getRegistrationCount(raw),
    synced_at: syncedAt,
  };
}

async function fetchEventPage({ url, anonKey }) {
  const response = await fetch(url, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Source API ${response.status}: ${body.slice(0, 200)}`);
  }

  const payload = await response.json();
  return Array.isArray(payload) ? payload : [];
}

export async function syncEvents({ db, sourceUrl, sourceAnonKey, batchSize = 1000, logger = console }) {
  const startedAt = new Date().toISOString();
  const syncRunId = db.createSyncRun(startedAt);

  try {
    const syncedAt = new Date().toISOString();
    const mappedEvents = [];
    let offset = 0;

    while (true) {
      const url = buildSourceUrl({ baseUrl: sourceUrl, offset, limit: batchSize });
      const page = await fetchEventPage({ url, anonKey: sourceAnonKey });

      if (page.length === 0) {
        break;
      }

      for (const raw of page) {
        if (!raw?.id || !raw?.title || !raw?.date) {
          continue;
        }
        mappedEvents.push(mapRemoteEvent(raw, syncedAt));
      }

      if (page.length < batchSize) {
        break;
      }

      offset += batchSize;
    }

    db.upsertMany(mappedEvents);

    db.finishSyncRun({
      id: syncRunId,
      status: 'success',
      recordsSynced: mappedEvents.length,
      errorMessage: null,
    });

    logger.info(`[sync] completed: ${mappedEvents.length} events`);

    return {
      ok: true,
      recordsSynced: mappedEvents.length,
      syncedAt,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    db.finishSyncRun({
      id: syncRunId,
      status: 'failed',
      recordsSynced: 0,
      errorMessage,
    });

    logger.error(`[sync] failed: ${errorMessage}`);

    return {
      ok: false,
      recordsSynced: 0,
      error: errorMessage,
    };
  }
}
