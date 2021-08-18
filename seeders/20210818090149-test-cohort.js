module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cohorts', [
      {
        id: 1,
        name: 'Dummy Cohort 1',
        createdAt: new Date('2020-12-31'),
        updatedAt: new Date('2020-12-31')
      },
       {
        id: 2,
        name: 'Dummy Cohort 2',
        createdAt: new Date('2020-12-31'),
        updatedAt: new Date('2020-12-31')
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cohorts', null, {});
  }
};
