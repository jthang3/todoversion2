require('dotenv').config();

const express = require("express");
const app = express();
const db = require("./db");
const controller = require("./controllers/userController");

db.sync();

app.use(express.json());

app.use("/user",controller);

app.listen(3000, () => {
    console.log("Listening to port 3000");
})