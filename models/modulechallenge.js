'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModuleChallenge extends Model {
 
    static associate(models) {
      this.Student = this.belongsTo(models.Student)
    }
  };
  ModuleChallenge.init({
    StudentId: DataTypes.INTEGER,
    challengeName: DataTypes.STRING,
    language: DataTypes.STRING,
    studentScore: DataTypes.STRING,
    coachScore: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    submissionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ModuleChallenge',
  });
  return ModuleChallenge;
<<<<<<< HEAD
};

=======
};
>>>>>>> 247ca7e (added file checks)
