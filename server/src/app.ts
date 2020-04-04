import express from "express";
import bodyParser from "body-parser";
import baseRoute from "./routes/base";

const app : express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/base", baseRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

export default app;