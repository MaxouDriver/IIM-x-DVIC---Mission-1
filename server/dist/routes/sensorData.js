"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../database"));
const router = express_1.Router();
router.get('/:id', (req, res) => {
    console.log("sensor data get");
    const query = 'SELECT * FROM sensor_data WHERE id=?';
    database_1.default.execute(query, [req.params.id], { prepare: true })
        .then(result => res.send(result.rows)).catch(err => res.send(err));
});
router.post('/', (req, res) => {
    exports.createSensorData(req.body.value, (data) => {
        res.send(data);
    }, (err) => {
        res.send(err);
    });
});
exports.createSensorData = (value, successCallback, failureCallback) => {
    console.log("sensor data post");
    if (!value) {
        failureCallback("Missing value");
        return;
    }
    const query = 'INSERT INTO sensor_data (id, time, value) VALUES (?, ?, ?)';
    const id = uuid_1.v4();
    database_1.default.execute(query, [id, new Date().getTime(), value], { prepare: true })
        .then(result => successCallback(id)).catch(err => failureCallback(err));
};
router.put('/:id', (req, res) => {
    console.log("sensor data put");
    let parts = [];
    if (!req.params.id) {
        res.send("Missing id");
        return;
    }
    if (!req.body.name && !req.body.value) {
        res.send("Missing one or more parameter, name, type and data are needed");
        return;
    }
    else {
        if (req.body.name) {
            parts.push(`name='${req.body.name}'`);
        }
        if (req.body.value) {
            parts.push(`value='${req.body.value}'`);
        }
    }
    let query = `Update sensor_data Set ${parts.join(",")} Where id=?`;
    database_1.default.execute(query, [req.params.id], { prepare: true })
        .then(result => res.send(result)).catch(err => res.send(err));
});
router.delete('/:id', (req, res) => {
    console.log("sensor data delete");
    const query = 'Delete from sensor_data Where id=?';
    if (!req.params.id) {
        res.send("Missing id");
        return;
    }
    database_1.default.execute(query, [req.params.id], { prepare: true })
        .then(result => res.send(result)).catch(err => res.send(err));
});
exports.default = router;
