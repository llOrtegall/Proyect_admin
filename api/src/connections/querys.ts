import { Pool, ResultSetHeader } from 'mysql2/promise';

// SELECTS
export async function SelectQuery<T>(pool: Pool, queryStr: string, params?: any[]): Promise<Partial<T>[]> {
  const [result] = await pool.execute(queryStr, params)
  return result as T[]
}

// UPDATE, DELETE INSERTS
export async function ModifyQuery(pool: Pool, queryStr: string, params?: any[]): Promise<ResultSetHeader> {
  const [result] = await pool.execute(queryStr, params)
  return result as ResultSetHeader
}