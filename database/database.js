const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress','root', 'abc@123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;