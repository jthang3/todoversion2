const express = require("express");
const route = express.Router();
const User = require("../module/User");
const bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

//sign up

route.post("/signup",(req,res) => {
    User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password,10)
    }).then(data => {
        let token = jwt.sign({id: data.id}, process.env.SIGN, {expiresIn: 60*60*24});
        res.status(200).json({
            user: data,
            token: token
        })
    })
})

//login

route.post("/login",(req,res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        bcrypt.compare(req.body.password,user.password, (err,matches) => {
            if(matches) {
                let token = jwt.sign({id: user.id}, process.env.SIGN, {expiresIn: 60* 60* 24});
                res.status(200).json({
                    user: user,
                    token: token
                })
            }
        })
    })
})
module.exports = route;