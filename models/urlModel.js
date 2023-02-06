const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class URL extends Model {}

URL.init(
  {
    long_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    short_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "url",
  }
);

module.exports = URL;
