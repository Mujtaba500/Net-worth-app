import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const userModel = sequelize.define("User", {
  // Model attributes are defined here
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default userModel;
