import express from 'express';
import { metas } from './routes/routes.js'
import 'dotenv/config';

const app = express();
const port = 3000;

app.use('/api', metas);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});