import { pool } from '../connections/mysqlMetas.js'

export const getSucursales = async (_req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM sucursales');
    connection.release();
    res.json(rows);
  } catch (error) {
    res.json({ error: error.message });
  }
}