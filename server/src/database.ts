import {DB_USERNAME, DB_PASSWORD} from './constants';

const pgp = require('pg-promise');

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'monitoring',
    user: DB_USERNAME,
    password: DB_PASSWORD
};

const db = pgp(cn);

export default db;