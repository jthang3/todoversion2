const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const User = db.define('User1', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
})

module.exports = User;