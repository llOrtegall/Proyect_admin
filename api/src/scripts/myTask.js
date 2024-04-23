import { pool_test } from '../connections/mysqlTest.js';
import { pool } from '../connections/mysqlMetas.js';

const PRODUCTOS = "CHANCE,PAGAMAS,PAGATODO,GANE5,PATA_MILLONARIA,DOBLECHANCE,CHANCE_MILLONARIO,ASTRO,LOTERIA_FISICA,LOTERIA_VIRTUAL,BETPLAY,GIROS,SOAT,RECAUDOS,RECARGAS,PROMO1,PROMO2"
const SUCURSALESYUMBO = ''

export const myTask = async () => {
  // consultar tabla metas
  try {
    const connection = await pool.getConnection()
  
    const [rows] = await connection.query(`SELECT ${PRODUCTOS} FROM METASPRODUCTOS WHERE FECHA = CURDATE() and ZONA = '39627'`)
    connection.release();  

    console.log(rows);

     const connection_test = await pool_test.getConnection()
    await connection_test.query(`INSERT INTO horas_39825 (${PRODUCTOS}) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
      [
        rows[0].CHANCE, rows[0].PAGAMAS, rows[0].PAGATODO, rows[0].GANE5, rows[0].PATA_MILLONARIA, rows[0].DOBLECHANCE, rows[0].CHANCE_MILLONARIO, rows[0].ASTRO, 
        rows[0].LOTERIA_FISICA, rows[0].LOTERIA_VIRTUAL, rows[0].BETPLAY, rows[0].GIROS, rows[0].SOAT, rows[0].RECAUDOS, rows[0].RECARGAS, rows[0].PROMO1, rows[0].PROMO2
      ]
    )

    connection_test.release();  

    console.log(' Task Terminate !!! ');
      
  } catch (error) {
    console.log(error);
  }

}