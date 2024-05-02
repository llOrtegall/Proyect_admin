import { createPool } from 'mysql2/promise.js'
import dotenv from 'dotenv';

dotenv.config();

export const pool_test = createPool({
  host: process.env.DB_TEST_HOST,
  port: process.env.DB_TEST_PORT,
  user: process.env.DB_TEST_USER,
  password: process.env.DB_TEST_PASS,
  database: process.env.DB_TEST_USE,
  connectionLimit: 10
})