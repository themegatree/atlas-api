"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Students","gender", Sequelize.STRING);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("Students", "gender");
  }
};
