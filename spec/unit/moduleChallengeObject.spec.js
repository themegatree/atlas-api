require("dotenv").config();
const truncateTables = require("../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../test/ReportGroupTests/create-module-challenges");
const challengeRatio = require("../../src/reports/challengeRatio");
const createModuleChallengesNoData = require("../../test/ReportGroupTests/create-module-challenges-no-data");
const constants = require("../../constants");
describe("background ratio test", () => {
  let cohortId;
  let challengeArr;
  beforeEach( async () => { 
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    cohortId = 1;
    challengeArr = await challengeRatio(cohortId);
  });
  it("calculates background ratio from background data", async () => {
    expect(challengeArr[1].type).toBe(constants.challenge.chitter);
  });
});
describe("background ratio test", () => {
  let cohortId;
  let challengeArr;
  beforeEach( async () => { 
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallengesNoData();
    cohortId = 1;
    challengeArr = await challengeRatio(cohortId);
  });
  it("Shows null completion values as no data ", async () => {
    expect(challengeArr[0].percentage).toBe("50.00");
  });
});
