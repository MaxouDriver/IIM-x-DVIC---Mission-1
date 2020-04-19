"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../database");
const router = express_1.Router();
router.get('/', (req, res) => {
    console.log("client get");
    database_1.getDb().collection('client').find({}).toArray(function (err, result) {
        if (err)
            throw err;
        console.log(result);
        res.send(result);
    });
});
router.post('/', (req, res) => {
    console.log("client post");
    database_1.getDb().collection('client').insertOne(req.body, function (err, result) {
        if (err)
            throw err;
        res.send(result);
    });
});
router.put('/data/:id', (req, res) => {
    console.log("client data post");
    if (!req.params.id || !req.body.data) {
        res.send("Missing id or data");
        return;
    }
});
router.delete('/:id', (req, res) => {
    console.log("client delete");
    if (!req.params.id) {
        res.send("Missing id");
        return;
    }
    database_1.getDb().collection('client').deleteOne({ _id: req.params.id }, function (err, obj) {
        if (err)
            throw err;
        res.send("Document deleted");
    });
});
exports.default = router;
