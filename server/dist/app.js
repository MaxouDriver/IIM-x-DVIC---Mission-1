"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const base_1 = __importDefault(require("./routes/base"));
const client_1 = __importDefault(require("./routes/client"));
const database_1 = require("./database");
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
database_1.connect((err) => {
    if (err)
        console.log(err);
    app.use("/base", base_1.default);
    app.use("/client", client_1.default);
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
exports.default = app;
