// models/user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
