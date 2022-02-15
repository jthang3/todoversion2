require('dotenv').config();

const express = require("express");
const app = express();
const db = require("./db");
const controller = require("./controllers/userController");
const todoContrller = require("./controllers/todoController");
const userLogin = require("./controllers/userLogin");
const PORT = process.env.PORT || 3000;
const validation = require("./validation/validation");

db.sync();

app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "cline/build")));
// }
app.use("/create",userLogin);
app.use(validation);

app.use("/user",controller);
app.use("/todo",todoContrller);

app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}`);
})