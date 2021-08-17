'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
<<<<<<< HEAD

    static associate(models) {

      this.ModuleChallenges = this.hasMany(models.ModuleChallenge, {onDelete: 'cascade'})
      this.SelfAssessments = this.hasMany(models.SelfAssessment, { onDelete: 'cascade' })
      this.Cohort = this.belongsTo(models.Cohort)
     

    }
=======
    static associate(models) {}
>>>>>>> ca888d3 (added student sorting and student database test)
  };
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    githubUsername: DataTypes.STRING,
    email: DataTypes.STRING,
    background: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
