"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UploadHistory extends Model {

  }
  UploadHistory.init({
    uploadType: DataTypes.STRING,
    status: DataTypes.STRING,
    errors: DataTypes.TEXT
  }, {
    sequelize,
    modelName: "UploadHistory",
  });
  return UploadHistory;
};
