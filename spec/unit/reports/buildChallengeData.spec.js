require("dotenv").config();
const constants = require("../../../constants");

const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");
const { Student } = require("../../../models");

const buildChallengeData = require("../../../src/reports/buildChallengeData.js");

describe("test challenge:", () => {
  
  let cohortData;

  beforeEach( async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    cohortData = await Student.queryBy({CohortId: 1});
  });

  it("objects have correct keys", function(){ 
    const challengeData = buildChallengeData(cohortData.rows,"challenge");
    expect(Object.keys(challengeData[0])).toEqual(["type","percentage"]);
  });

  it("object", () => {
    const challengeData = buildChallengeData(cohortData.rows,"challenge");
    console.log(challengeData);
    expect(Object.values(challengeData[0])).toEqual([constants.challenge.bank,"100.00"]);
    expect(Object.values(challengeData[1])).toEqual([constants.challenge.chitter,"67.00"]);
  });
  

});
