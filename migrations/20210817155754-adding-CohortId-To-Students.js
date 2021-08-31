"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Students","CohortId", {
      type:Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Cohorts"
        },
        key: "id"
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("Students","CohortId");
  }
};
