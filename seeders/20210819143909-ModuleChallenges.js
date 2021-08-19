'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ModuleChallenges', [{
    StudentId: 1,
    challengeName: "bank",
    language: "node",
    studentScore: "complete",
    coachScore: "complete",
    dueDate: new Date('2021-01-08'),
    submissionDate: new Date('2021-01-08'),
    createdAt:new Date('2021-01-08'),
    updatedAt:new Date('2021-01-08')
    },
    {
    StudentId: 1,
    challengeName: "bank",
    language: "node",
    studentScore: "complete",
    coachScore: "complete",
    dueDate: new Date('2021-01-08'),
    submissionDate: new Date('2021-01-08'),
    createdAt:new Date('2021-01-08'),
    updatedAt:new Date('2021-01-08')
    }]
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ModuleChallenges', null, {})
  }
};
