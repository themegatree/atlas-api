'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn(
     'Cohorts',
     'date',
      Sequelize.DATE
      )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Cohorts', 'date');
    }
  };
