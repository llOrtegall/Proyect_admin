// Importaciones de módulos
import { metas } from './routes/routes.js';
import cron from 'node-cron';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { myTask } from './Scripts/myTask.js';

import { pool } from './connections/mysqlMetas.js';
import { pool_test } from './connections/mysqlTest.js';

// Creación de la aplicación Express
const app = express();
const port = 3000;

async function createTables() {
  try {
    const connection = await pool.getConnection()
    const [results] = await connection.query("select CODIGO from INFORMACION_PUNTOSVENTA where zona = '39627';")

    console.log(results.length);

    const connection_test = await pool_test.getConnection()

    for (let result of results) {
      const response = await connection_test.query(`CREATE TABLE horas_${result.CODIGO} (
          FECHA TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP PRIMARY KEY,
          CHANCE INT,
          PAGAMAS INT,
          PAGATODO INT,
          GANE5 INT,
          PATA_MILLONARIA INT,
          DOBLECHANCE INT,
          CHANCE_MILLONARIO INT,
          ASTRO INT,
          LOTERIA_FISICA INT,
          LOTERIA_VIRTUAL INT,
          BETPLAY INT,
          GIROS INT,
          SOAT INT,
          RECAUDOS INT,
          RECARGAS INT,
          PROMO1 INT,
          PROMO2 INT
        )`)

      console.log(response);
    }

    res.status(200).json({ message: 'Tables created successfully' })
  } catch (error) {
    console.log(error);
    res.status(500).json(error.sqlMessage)
  }

}

async function dropTables() {
  try {
    const connection_test = await pool_test.getConnection()

    const response = await connection_test.query(`DROP TABLE horas_*[39633-43900]`)

    console.log(response);
  } catch (error) {
    console.log(error);
  }

} 

// createTables();
// dropTables();

// Configuración de middleware
app.use(cors());
app.use(morgan('dev'));

// Configuración de rutas
app.use('/api', metas);

// Inicio del servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);

  // Programa la tarea para que se ejecute cada hora desde las 6 AM hasta las 11 PM
  // cron.schedule('0 6-23 * * *', myTask);
  // cron.schedule('*/1 * * * *', myTask);
});