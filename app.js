require('dotenv').config();

const express = require("express");
const app = express();
const db = require("./db");
const controller = require("./controllers/userController");
const path = require("path");
const PORT = process.env.PORT || 3000;

db.sync();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "cline/build")));
}

app.use("/user",controller);

app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}`);
})