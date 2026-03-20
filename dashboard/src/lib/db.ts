import pg from 'pg';

const { Pool } = pg;

// Connection string from environment variable
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn('DATABASE_URL not set. Database operations will fail.');
}

const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export const db = {
  query: (text: string, params?: any[]) => pool.query(text, params),
  pool
};

export default db;
