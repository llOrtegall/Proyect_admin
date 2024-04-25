// Importaciones de módulos
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { metas } from './routes/routes.js';
import { horas } from './routes/horas.routes.js'

// Creación de la aplicación Express
const app = express();
const port = 3000;

// Configuración de middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Configuración de rutas
app.use('/api', metas);

app.use('/api', horas);

// Inicio del servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});