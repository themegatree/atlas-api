"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SelfAssessments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StudentId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Students"
          },
          key: "id"
        },
        allowNull: false,
        onDelete: "cascade",
      },
      learningConfidence: {
        type: Sequelize.INTEGER
      },
      overallConfidence: {
        type: Sequelize.INTEGER
      },
      studentReason: {
        type: Sequelize.STRING
      },
      studentFeedback: {
        type: Sequelize.STRING
      },
      dueDate: {
        type: Sequelize.DATE
      },
      submissionDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("SelfAssessments");
  }
};
