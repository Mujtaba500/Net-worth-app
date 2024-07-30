import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import userModel from "../user/index.js";

const assetModel = sequelize.define("Asset", {
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

userModel.hasMany(assetModel);
assetModel.belongsTo(userModel);

export default assetModel;
