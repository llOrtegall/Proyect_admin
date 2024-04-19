import { pool } from '../connections/mysqlMetas.js'

export const getSucursales = async (_req, res) => {
  try {
    const results = await pool.query(" select * from METASPRODUCTOS where FECHA=CURDATE() and ZONA = '39628' ")
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}