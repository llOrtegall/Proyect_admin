import { createPool } from 'mysql2/promise.js'

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'password',
  database: 'metas',
  connectionLimit: 10
})