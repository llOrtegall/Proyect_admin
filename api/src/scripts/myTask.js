import { pool_test } from '../connections/mysqlTest.js';
import { pool } from '../connections/mysqlMetas.js';

const PRODUCTOS = "SUCURSAL,CHANCE,PAGAMAS,PAGATODO,GANE5,PATA_MILLONARIA,DOBLECHANCE,CHANCE_MILLONARIO,ASTRO,LOTERIA_FISICA,LOTERIA_VIRTUAL,BETPLAY,GIROS,SOAT,RECAUDOS,RECARGAS,PROMO1,PROMO2"

export const myTask = async () => {
  try {
    const connection = await pool.getConnection()
  
    const [sucursalesMetas] = await connection.query(`SELECT ${PRODUCTOS} FROM METASPRODUCTOS WHERE FECHA = CURDATE() and ZONA = '39627'`)

    connection.release();  

    // console.log(sucursalesMetas);

    let sucursales = []
    
    sucursalesMetas.forEach(row => {
      sucursales.push(row.SUCURSAL)
    })

    const connection_test = await pool_test.getConnection()


    for (let i = 0; i < sucursales.length; i++) {
      const sucursal = sucursales[i]
      const [result] = await connection_test.query(`
      INSERT INTO horas_${sucursal} (CHANCE, PAGAMAS, PAGATODO, GANE5, PATA_MILLONARIA, DOBLECHANCE, CHANCE_MILLONARIO, ASTRO, LOTERIA_FISICA, LOTERIA_VIRTUAL, BETPLAY, GIROS, SOAT, RECAUDOS, RECARGAS, PROMO1, PROMO2) VALUES (
        ${sucursalesMetas[i].CHANCE}, ${sucursalesMetas[i].PAGAMAS}, ${sucursalesMetas[i].PAGATODO}, ${sucursalesMetas[i].GANE5}, ${sucursalesMetas[i].PATA_MILLONARIA}, ${sucursalesMetas[i].DOBLECHANCE}, ${sucursalesMetas[i].CHANCE_MILLONARIO}, ${sucursalesMetas[i].ASTRO}, ${sucursalesMetas[i].LOTERIA_FISICA}, ${sucursalesMetas[i].LOTERIA_VIRTUAL}, ${sucursalesMetas[i].BETPLAY}, ${sucursalesMetas[i].GIROS}, ${sucursalesMetas[i].SOAT}, ${sucursalesMetas[i].RECAUDOS}, ${sucursalesMetas[i].RECARGAS}, ${sucursalesMetas[i].PROMO1}, ${sucursalesMetas[i].PROMO2}
      )
      `)
    }

    console.log('Datos insertados correctamente');
      
  } catch (error) {
    console.log(error);
  }

}