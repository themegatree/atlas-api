'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {

    static associate(models) {

      this.ModuleChallenges = this.hasMany(models.ModuleChallenge, {onDelete: 'cascade'})
      this.SelfAssessments = this.hasMany(models.SelfAssessment, { onDelete: 'cascade' })
<<<<<<< HEAD
      this.Cohort = this.belongsTo(models.Cohort)
     
=======
>>>>>>> 247ca7e (added file checks)

    }
  };
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    githubUsername: DataTypes.STRING,
<<<<<<< HEAD
    email: DataTypes.STRING,
    background: DataTypes.STRING,
    gender: DataTypes.STRING
=======
    email: DataTypes.STRING
>>>>>>> 247ca7e (added file checks)
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
