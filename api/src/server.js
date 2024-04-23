// Importaciones de módulos
import { metas } from './routes/routes.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';


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
});