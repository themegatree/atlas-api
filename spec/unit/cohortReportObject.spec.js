const truncateTables = require("../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../test/ReportGroupTests/create-module-challenges");
const Report = require("../../src/reports/Report");
describe("Test Report Class", () => {
  let cohortId;
  let report;
  let completeReport;
  beforeEach( async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    cohortId = 1;
    report = new Report();
    completeReport = await report.create(cohortId);
  });
  it("can get genders", async () => {
    expect(completeReport.gender).toEqual([
      { type: "male", number: 1, percentage: "25.00" },
      { type: "female", number: 3, percentage: "75.00" }
    ]);
  });
  it("can get backgrounds", async () => {
    expect(completeReport.background).toEqual([
      { type: "White", number: 1, percentage: "25.00" },
      { type: "Black", number: 2, percentage: "50.00" },
      { type: "Other", number: 1, percentage: "25.00" }
    ]);
  });
  it("can get challenges", async () => {
    expect(completeReport.challenges).toEqual([
      { type: "bank", percentage: "100.00" },
      { type: "Chitter", percentage: "66.67" },
    ]);
  });
  it("can get the cohortId", async () => {
    expect(completeReport.cohortId).toEqual(1);
  });
  it("can get the cohortSize", async () => {
    expect(completeReport.cohortSize).toEqual(4);
  });
  it("can get the cohortName", async () => {
    expect(completeReport.cohortName).toEqual("Dummy Cohort 1");
  });
});