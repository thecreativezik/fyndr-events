const defaultSupabaseUrl = 'https://xvodlnzivmwthattilwr.supabase.co';
const defaultSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2b2Rsbnppdm13dGhhdHRpbHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjMzNDUsImV4cCI6MjA2NTU5OTM0NX0.FFaTiUUAVAhjDeOkRyt7v4PlqzFJwlIu6VXZMXQgEDc';

const syncMinutes = Number.parseInt(process.env.SYNC_INTERVAL_MINUTES ?? '30', 10);

export const config = {
  port: Number.parseInt(process.env.PORT ?? '8787', 10),
  dbPath: process.env.DB_PATH ?? 'data/events.db',
  syncIntervalMs: Number.isNaN(syncMinutes) ? 30 * 60 * 1000 : Math.max(syncMinutes, 1) * 60 * 1000,
  sourceUrl: process.env.TEG_SUPABASE_URL ?? defaultSupabaseUrl,
  sourceAnonKey: process.env.TEG_SUPABASE_ANON_KEY ?? defaultSupabaseAnonKey,
  syncBatchSize: Number.parseInt(process.env.SYNC_BATCH_SIZE ?? '1000', 10),
  autoSync: process.env.AUTO_SYNC !== 'false',
};
