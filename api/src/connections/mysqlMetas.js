import { createPool } from 'mysql2/promise.js'

export const pool = createPool({
  host: process.env.METAS_HOST,
  port: process.env.METAS_PORT,
  database: process.env.METAS_DB,
  user: process.env.METAS_USER,
  password: process.env.METAS_PASSWORD,
  connectionLimit: 10
})