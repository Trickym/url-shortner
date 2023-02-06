const { Sequelize } = require("sequelize");

const createDB = new Sequelize("url", "tricky", "123", {
  dialect: "sqlite",
  host: "./config/db.sqlite",
});

module.exports = createDB;
