import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import userModel from "../user/index.js";

const liabilityModel = sequelize.define("Liability", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

userModel.hasMany(liabilityModel);
liabilityModel.belongsTo(userModel);

export default liabilityModel;
