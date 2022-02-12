const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define('User1', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
})

module.exports = User;