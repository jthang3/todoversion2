const {Sequelize, DataTypes} = require("sequelize");

const db = require("../db");

let toDo = db.define("Todo",{
    todo: DataTypes.STRING,
    ownder: DataTypes.INTEGER
});

module.exports = toDo;