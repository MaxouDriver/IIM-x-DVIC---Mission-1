"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pgp = require('pg-promise')( /* initialization options */);
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'monitoring',
    user: 'maxime',
    password: 'hyUjkd98'
};
// alternative:
// var cn = 'postgres://username:password@host:port/database';
const db = pgp(cn);
exports.default = db;
