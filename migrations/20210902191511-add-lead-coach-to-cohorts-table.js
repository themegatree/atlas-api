"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Cohorts",
      "leadCoach",
      Sequelize.STRING
    );},

  down: async (queryInterface) => {
    await queryInterface.removeColumn("Cohorts", "leadCoach");
  }
};
