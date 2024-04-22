import { pool } from '../connections/mysqlMetas.js';
import { pool_test } from '../connections/mysqlTest.js';

const PRODUCTOS = "CHANCE,PAGAMAS,PAGATODO,GANE5,PAGATODO_JAMUNDI,CHOLADITO,PATA_MILLONARIA,DOBLECHANCE,CHANCE_MILLONARIO,ASTRO,LOTERIA_FISICA,LOTERIA_VIRTUAL,BETPLAY,GIROS,SOAT,RECAUDOS,RECARGAS,PROMO1,PROMO2,ZONA,SUCURSAL"


export const myTask = async () => {
  // consultar tabla metas
  try {
    const connection = await pool.getConnection()
  
    const [rows] = await connection.query(`SELECT ${PRODUCTOS} FROM METASPRODUCTOS WHERE FECHA = CURDATE() and SUCURSAL = '39825'`)
  
    connection.release();
  
    const connection_test = await pool_test.getConnection()
  
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}, ${date.getHours() % 12 || 12}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
    
    console.log(formattedDate);
  
    await connection_test.query(`
    INSERT INTO day_22_04_2024_39825 (FECHA, CHANCE, PAGAMAS, PAGATODO, GANE5, PAGATODO_JAMUNDI, CHOLADITO, PATA_MILLONARIA, DOBLECHANCE, CHANCE_MILLONARIO, ASTRO, LOTERIA_FISICA, LOTERIA_VIRTUAL, BETPLAY, GIROS, SOAT, RECAUDOS, RECARGAS, PROMO1, PROMO2, ZONA, SUCURSAL) 
    VALUES (STR_TO_DATE('${formattedDate}', '%d/%m/%Y, %I:%i:%s %p'), ${rows[0].CHANCE}, ${rows[0].PAGAMAS}, ${rows[0].PAGATODO}, ${rows[0].GANE5}, ${rows[0].PAGATODO_JAMUNDI}, ${rows[0].CHOLADITO}, ${rows[0].PATA_MILLONARIA}, ${rows[0].DOBLECHANCE}, ${rows[0].CHANCE_MILLONARIO}, ${rows[0].ASTRO}, ${rows[0].LOTERIA_FISICA}, ${rows[0].LOTERIA_VIRTUAL}, ${rows[0].BETPLAY}, ${rows[0].GIROS}, ${rows[0].SOAT}, ${rows[0].RECAUDOS}, ${rows[0].RECARGAS}, ${rows[0].PROMO1}, ${rows[0].PROMO2}, ${rows[0].ZONA}, '39825')
  `)

    connection_test.release();

    console.log('Task completed')
  } catch (error) {
    console.log(error);
  }

}