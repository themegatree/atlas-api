'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SelfAssessment extends Model {

    static associate(models) {
      this.Student = this.belongsTo(models.Student)
    }
  };
  SelfAssessment.init({
    StudentId: DataTypes.INTEGER,
    learningConfidence: DataTypes.INTEGER,
    overallConfidence: DataTypes.INTEGER,
    studentReason: DataTypes.STRING,
    studentFeedback: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    submissionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SelfAssessment',
  });
  return SelfAssessment;
};
