"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {

    static associate(models) {

      this.ModuleChallenges = this.hasMany(models.ModuleChallenge, {onDelete: "cascade"});
      this.SelfAssessments = this.hasMany(models.SelfAssessment, { onDelete: "cascade" });
      this.Cohort = this.belongsTo(models.Cohort);
     

    }
  }
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    githubUsername: DataTypes.STRING,
    email: DataTypes.STRING,
    background: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Student",
  });
  return Student;
};
