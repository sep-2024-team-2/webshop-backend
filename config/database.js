const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("webshop", "postgres", "super", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
