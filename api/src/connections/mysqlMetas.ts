import { createPool } from 'mysql2/promise'
import 'dotenv/config'

export const pool_metas = createPool({
  host: process.env.DB_METAS_HOST,
  port: parseInt(process.env.DB_METAS_PORT as string),
  user: process.env.DB_METAS_USER,
  password: process.env.DB_METAS_PASS,
  database: process.env.DB_METAS_USE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})