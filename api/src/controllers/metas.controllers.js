import { pool } from '../connections/mysqlMetas.js'

export const getSucursales = async (_req, res) => {
  try {
    const connection = await pool.getConnection()
    console.log(connection);
  } catch (error) {
    console.log(error);
  }
}