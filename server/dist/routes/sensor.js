"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = __importDefault(require("../database"));
const router = express_1.Router();
router.get('/', (req, res) => {
    console.log("sensor get");
    database_1.default.collection("sensor").findOne({}, function (err, result) {
        if (err)
            throw err;
        res.send(result);
    });
});
router.post('/', (req, res) => {
    console.log("sensor post");
    const query = 'INSERT INTO sensor (id, name, type, data) VALUES (?, ?, ?, ?)';
    if (!req.body.name || !req.body.type || !req.body.data) {
        res.send("Missing one or more parameter, name, type and data are needed");
        return;
    }
    database_1.default.collection("sensor").insertOne({ name: req.body.name, type: req.body.type, data: req.body.data }, function (err, result) {
        if (err)
            throw err;
        res.send(result);
    });
});
router.put('/data/:id', (req, res) => {
    console.log("sensor data post");
    if (!req.params.id || !req.body.data) {
        res.send("Missing id or data");
        return;
    }
    database_1.default.collection("sensor").updateOne({ _id: req.params.id }, { $set: { data: "Mickey" } }, function (err, result) {
        if (err)
            throw err;
        res.send(result);
    });
});
router.put('/:id', (req, res) => {
    console.log("sensor put");
    let parts = {};
    if (!req.params.id) {
        res.send("Missing id");
        return;
    }
    if (!req.body.name && !req.body.type && !req.body.data) {
        res.send("Missing one or more parameter, name, type and data are needed");
        return;
    }
    else {
        if (req.body.name) {
            parts.name = req.body.name;
        }
        if (req.body.type) {
            parts.type = req.body.type;
        }
        if (req.body.data) {
            parts.data = req.body.data;
        }
    }
    database_1.default.collection("sensor").updateOne({ _id: req.params.id }, { $set: parts }, function (err, result) {
        if (err)
            throw err;
        res.send(result);
    });
});
router.delete('/:id', (req, res) => {
    console.log("sensor delete");
    const query = 'Delete from sensor Where id=?';
    if (!req.params.id) {
        res.send("Missing id");
        return;
    }
    database_1.default.collection("sensor").deleteOne({ _id: req.params.id }, function (err, obj) {
        if (err)
            throw err;
        res.send("Document deleted");
    });
});
exports.default = router;
