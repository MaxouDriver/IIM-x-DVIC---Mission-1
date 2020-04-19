import express from "express";
import bodyParser from "body-parser";
import baseRoute from "./routes/base";
import clientRoute from "./routes/client";
import { connect } from './database';

const app : express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

connect((err: any) => {
    if (err) console.log(err);

    app.use("/base", baseRoute);
    app.use("/client", clientRoute);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

export default app;