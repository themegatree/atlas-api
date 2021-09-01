"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Cohorts",
      "startDate",
      Sequelize.DATE
    );},

  down: async (queryInterface) => {
    await queryInterface.removeColumn("Cohorts", "startDate");
  }
};
