module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Students","background",Sequelize.STRING);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("Students","background");
  }
};
