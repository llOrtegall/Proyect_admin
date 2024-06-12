import { createPool } from 'mysql2/promise'
import 'dotenv/config'

export const pool_metas = createPool(
  {
    host: '172.20.1.92',
    port: 3306,
    user: 'consultametas',
    password: 'JOeC7GhDJdTGPViFRoca',
    database: 'GAMBLE'
  }
)