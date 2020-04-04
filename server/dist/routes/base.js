"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = __importDefault(require("../database"));
const router = express_1.Router();
router.get('/', (req, res) => {
    database_1.default.query('SELECT * FROM client').then((client) => {
        res.send(client); // print user name;
    })
        .catch((error) => {
        console.log(error); // print the error;
    });
});
exports.default = router;
