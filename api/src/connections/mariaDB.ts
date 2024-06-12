import { Sequelize } from 'sequelize';
import 'dotenv/config'

const host = process.env.DB_METAS_HOST as string;
const port = process.env.DB_METAS_PORT as string;
const user = process.env.DB_METAS_USER as string;
const pass = process.env.DB_METAS_PASS as string;
const database = process.env.DB_METAS_DATABASE as string;

const con_db = new Sequelize(database, user, pass, {
  host: host,
  port: parseInt(port),
  dialect: 'mariadb'
});

export { con_db }