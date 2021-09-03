"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkUpdate("Cohorts", {
      leadCoach: "Edward Withers"}, {id: 2});
    await queryInterface.bulkUpdate("Cohorts", {
      leadCoach: "Ed's evil twin"}, {id: 3});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkUpdate("Cohorts", {
      leadCoach: "Edward Withers"}, {id: 2});
    await queryInterface.bulkUpdate("Cohorts", {
      leadCoach: "Ed's evil twin"}, {id: 3});
  }
};