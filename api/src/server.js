// Importaciones de módulos
import { metas } from './routes/routes.js';
import cron from 'node-cron';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { myTask } from './Scripts/myTask.js';

// Creación de la aplicación Express
const app = express();
const port = 3000;

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
  cron.schedule('*/5 * * * *', myTask);
});