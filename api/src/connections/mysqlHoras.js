import { createPool } from 'mysql2/promise'

export const mysqlHoras = createPool({
  host: process.env.DB_HOST_HORAS,
  port: parseInt(process.env.DB_PORT_HORAS),
  user: process.env.DB_USER_HORAS,
  password: process.env.DB_PASS_HORAS,
  database: process.env.DB_USE_HORAS,
  connectionLimit: 10
})