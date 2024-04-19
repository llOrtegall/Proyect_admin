import { pool } from '../connections/mysqlMetas.js'

export const getSucursales = async (_req, res) => {
  try {
    const connection = await pool.getConnection()

    const [rows] = await connection.query("select ASTRO from METASPRODUCTOS where FECHA=CURDATE() and ZONA = '39628'")

    connection.release()

    console.log(rows.length);
    const sumar = rows.reduce((acc, row) => acc + row.ASTRO, 0)

    console.log(sumar);

    res.status(200).json(rows)
  } catch (error) {
    console.log(error);
  }
}