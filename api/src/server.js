import { metas } from './routes/routes.js'
import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use('/api', metas);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});