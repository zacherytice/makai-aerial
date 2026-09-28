CREATE TABLE IF NOT EXISTS flight_requests (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL DEFAULT '',
  site TEXT NOT NULL,
  project_type TEXT NOT NULL,
  flight_date TEXT NOT NULL DEFAULT '',
  brief TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_flight_requests_created_at
  ON flight_requests (created_at DESC);
