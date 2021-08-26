require("dotenv").config();
const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");
const challengeRatio = require("../../../src/dashboard/challengeRatio");

describe("challenge ratio test", () => {
  let challengeArr;

  beforeEach( async () => { 
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    challengeArr = await challengeRatio();
  });

  it("first challenge type is Bank", async () => {
    expect(challengeArr[0].type).toBe("bank");
  });
   
  it("second challenge type is Chitter", async () => {
    expect(challengeArr[1].type).toBe("Chitter");
  });

  it("calculates chitter challenge completion percentage from challenge data", async () => {
    expect(challengeArr[1].percentage).toBe("66.67");
  });

  it("calculates bank challenge completion percentage from challenge data", async () => {
    expect(challengeArr[0].percentage).toBe("100.00");
  });
});