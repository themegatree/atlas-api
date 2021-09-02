"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cohort extends Model {
    
    static associate(models) {

      this.Students = this.hasMany(models.Student);
      
    }
  }
  Cohort.init({
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    leadCoach: DataTypes.STRING,
    cohortSize: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.Students.length}`;
  }}}, {
    sequelize,
    modelName: "Cohort",
  });
  return Cohort;
};
