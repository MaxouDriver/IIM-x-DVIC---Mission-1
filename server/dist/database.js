"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = 'NoSqlCourse';
var _db;
exports.connect = function (callback) {
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
        _db = client.db(dbName);
        return callback(err);
    });
};
exports.getDb = function () {
    return _db;
};
