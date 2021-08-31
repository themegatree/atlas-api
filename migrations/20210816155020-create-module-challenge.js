"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ModuleChallenges", {
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
        onDelete: "CASCADE",
        allowNull: false
      },
      challengeName: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      studentScore: {
        type: Sequelize.STRING
      },
      coachScore: {
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
    await queryInterface.dropTable("ModuleChallenges");
  }
};