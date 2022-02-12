const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('finalToDO', 'postgres', 'Josephthang1!', {
    host: 'localhost',
    dialect: 'postgres'
});

try {
    sequelize.authenticate();
    console.log("Connection has been established successfully");
} catch(error) {
    console.log("Unable to connect to the database", error);
}

module.exports = sequelize;
