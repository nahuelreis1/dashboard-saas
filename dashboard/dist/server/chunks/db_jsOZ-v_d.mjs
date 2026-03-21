import pg from 'pg';

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.warn("DATABASE_URL not set. Database operations will fail.");
}
const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
});
const db = {
  query: (text, params) => pool.query(text, params),
  pool
};

export { db as d };
