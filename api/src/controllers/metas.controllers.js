import { pool } from '../connections/mysqlMetas.js'

const PRODUCTOS = "CHANCE,PAGAMAS,PAGATODO,GANE5,PAGATODO_JAMUNDI,CHOLADITO,PATA_MILLONARIA,DOBLECHANCE,CHANCE_MILLONARIO,ASTRO,LOTERIA_FISICA,LOTERIA_VIRTUAL,BETPLAY,GIROS,SOAT,RECAUDOS,RECARGAS,PROMO1,PROMO2"

const MULTIRED = '39628'

export const getSucursales = async (_req, res) => {
  try {
    const connection = await pool.getConnection()

    const [rows] = await connection.query(`
          SELECT mp.${PRODUCTOS}, 
            ip.NOMBRE AS PDV_NOMBRE, 
            ip.CATEGORIA AS PDV_CATE, 
            ip.CODIGO AS PDV_SUCURSAL
          FROM METASPRODUCTOS mp
          JOIN 
            INFORMACION_PUNTOSVENTA ip ON mp.SUCURSAL = ip.CODIGO
          WHERE 
          mp.FECHA = CURDATE() AND mp.ZONA = ?
    `, [MULTIRED])

    connection.release();

    res.status(200).json(rows)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}