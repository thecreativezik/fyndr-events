# Fyndr Events

Fyndr now uses a local database-backed event feed that automatically syncs with [Tech Event Ghana](https://www.techeventghana.com/).

## What this setup does

- Stores events in a local SQLite database (`data/events.db`)
- Syncs events from Tech Event Ghana into local storage on startup
- Auto-syncs on an interval (default: every 30 minutes)
- Serves events through a local API (`/api/events`)
- Renders event cards in the React UI from database-backed API data (no hardcoded cards)

## Stack

- Frontend: React + Vite
- API: Express
- Database: SQLite (`better-sqlite3`)

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start frontend + API together:

```bash
npm run dev
```

- Web app: `http://localhost:5173`
- API: `http://localhost:8787`

## Useful scripts

- `npm run dev` — runs API + frontend together
- `npm run dev:api` — runs API only with watch mode
- `npm run dev:web` — runs Vite frontend only
- `npm run start:api` — runs API only (no watch)
- `npm run sync:events` — manually trigger event sync via API

## Environment variables

Copy `.env.example` to `.env` and adjust values if needed.

- `PORT` — API port (default `8787`)
- `DB_PATH` — SQLite DB path (default `data/events.db`)
- `SYNC_INTERVAL_MINUTES` — periodic sync interval (default `30`)
- `AUTO_SYNC` — set to `false` to disable scheduled syncing
- `TEG_SUPABASE_URL` — override source URL
- `TEG_SUPABASE_ANON_KEY` — override source anon key

## API endpoints

- `GET /api/health` — basic health + latest sync metadata
- `GET /api/events?status=all|upcoming|ongoing|ended&q=...&limit=...` — fetch events
- `POST /api/sync` — manually run importer

