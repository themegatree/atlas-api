'use strict';

const student = require("../models/student");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Students', [{
      firstName: 'Dummy1',
      lastName: 'Student',
      githubUsername: 'dummy-student1',
      email: 'dummy1@student.com',
      gender: 'male',
      createdAt: new Date('2021-01-08'),
      updatedAt: new Date('2021-01-08')
    }, 
    {
      firstName: 'Dummy2',
      lastName: 'Student',
      githubUsername: 'dummy-student2',
      email: 'dummy2@student.com',
      gender: 'female',
      createdAt: new Date('2021-01-08'),
      updatedAt: new Date('2021-01-08')
    },
     {
      firstName: 'Dummy3',
      lastName: 'Student',
      githubUsername: 'dummy-student3',
      email: 'dummy3@student.com',
      gender: 'female',
      createdAt: new Date('2021-01-08'),
      updatedAt: new Date('2021-01-08')
    },
      {
      firstName: 'Dummy4',
      lastName: 'Student',
      githubUsername: 'dummy-student4',
      email: 'dummy4@student.com',
      gender: 'female',
      createdAt: new Date('2021-01-08'),
      updatedAt: new Date('2021-01-08')
    }
  
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
