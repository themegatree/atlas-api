const truncateTables = require("../../../test/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");
const constants = require("../../../constants");
const Dashboard = require("../../../src/dashboard/Dashboard");

describe("Test Dashboard Class", () => {
  let dashboard;
  let dashboardData;

  beforeEach( async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    dashboard = new Dashboard();
    dashboardData = await dashboard.create();
  });

  it("returns total number of students", async () => {
    expect(dashboardData.studentTotal).toEqual(5);
  });  

  it("returns total number of cohorts", async () => {
    expect(dashboardData.cohortsTotal).toEqual(3);
  });  

  it("creates genders array", async () => {
    expect(dashboardData.gender).toEqual(
      [
        { type: constants.gender.male, number: 1, percentage: "20.00" },
        { type: constants.gender.female, number: 4, percentage: "80.00" }
      ]
    );
  });

  it("creates backgrounds array", async () => {
    expect(dashboardData.background).toEqual(
      [
        { type: constants.background.white, number: 1, percentage: "20.00" },
        { type: constants.background.black, number: 2, percentage: "40.00" },
        { type: constants.background.other, number: 2, percentage: "40.00" }
      ]
    );
  });

  it("creates challenges array", async () => {
    expect(dashboardData.challenges).toEqual(
      [
        { type: constants.challenge.bank, percentage: "100.00" },
        { type: constants.challenge.chitter, percentage: "66.67" },
      ]
    );
  });
});
