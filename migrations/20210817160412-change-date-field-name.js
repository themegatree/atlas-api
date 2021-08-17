"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Cohorts", "date", Sequelize.DATE);
    await queryInterface.addColumn("Cohorts", "startDate", Sequelize.DATE);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Cohorts", "startDate");
  },
};
