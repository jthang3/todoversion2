const express = require("express");
const User = require("../module/User");
const route = express.Router();


route.get("/all",(req,res) => {
    User.findAll().then(user => {
        res.json({
            user: user
        })
    })
})

module.exports = route;