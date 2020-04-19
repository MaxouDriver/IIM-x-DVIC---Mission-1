"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = require("../database");
const router = express_1.Router();
router.get('/', (req, res) => {
    console.log("project get");
    database_1.getDb().collection('project').find({}).toArray(function (err, result) {
        if (err)
            throw err;
        res.send(result);
    });
});
router.post('/', (req, res) => {
    console.log("project post");
    database_1.getDb().collection('project').insertOne(req.body, function (err, result) {
        if (err)
            throw err;
        res.send(result);
    });
});
router.put('/data/:id', (req, res) => {
    console.log("project data post");
    if (!req.params.id || !req.body.data) {
        res.send("Missing id or data");
        return;
    }
});
router.delete('/:id', (req, res) => {
    console.log("project delete");
    if (!req.params.id) {
        res.send("Missing id");
        return;
    }
    database_1.getDb().collection('project').deleteOne({ _id: req.params.id }, function (err, obj) {
        if (err)
            throw err;
        res.send("Document deleted");
    });
});
exports.default = router;
