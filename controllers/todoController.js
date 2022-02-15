const express = require("express");
const route = express.Router();
const list = require("../module/List");


route.get("/todo",(req,res) => {
    list.findAll ({
        where: {
            ownder: req.user.id
        }
    }).then(data => {
        res.status(200).json({
            data: data
        },(err) => {
            res.send(err.message);
        })
    })
})

route.post("/add",(req,res) => {
    list.create({
        todo: req.body.todo,
        ownder: req.user.id
    }).then(data => {
        message: "List has been created!"
    })
})

module.exports = route;