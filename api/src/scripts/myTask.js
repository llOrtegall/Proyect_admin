import { pool_test } from '../connections/mysqlTest.js';
import { pool } from '../connections/mysqlMetas.js';

const PRODUCTOS = "SUCURSAL,CHANCE,PAGAMAS,PAGATODO,GANE5,PATA_MILLONARIA,DOBLECHANCE,CHANCE_MILLONARIO,ASTRO,LOTERIA_FISICA,LOTERIA_VIRTUAL,BETPLAY,GIROS,SOAT,RECAUDOS,RECARGAS,PROMO1,PROMO2"

export const myTask = async () => {
  try {
    const connection = await pool.getConnection()
  
    const [rows] = await connection.query(`SELECT ${PRODUCTOS} FROM METASPRODUCTOS WHERE FECHA = CURDATE() and ZONA = '39627'`)

    connection.release();  

    let sucursales = []
    
    rows.forEach(row => {
      sucursales.push(row.SUCURSAL)
    })
    
    console.log(sucursales);

    // const connect = await pool_test.getConnection()

    // const [rows2] = await connect.query(`INSERT INTO `) 


    // console.log(' Task Terminate !!! ');
      
  } catch (error) {
    console.log(error);
  }

}