require("dotenv").config();

const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");
const { Student } = require("../../../models");

const TransformData = require("../../../src/reports/transformData");
const Challenges = require("../../../src/reports/Challenges");
const constants = require("../../../constants");

fdescribe("test challenge class:", () => {
  
  let cohortData, transformData;
  let challengeNames, studentScores;
  let challenges;

  beforeEach( async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    cohortData = await Student.queryBy({CohortId: 1});
    transformData = new TransformData();
    transformData.build(cohortData.rows);
    challengeNames = transformData.challengeName;
    studentScores = transformData.studentScore;
    challenges = new Challenges();
  });

  it("can get unique challenge names", () => {
    // console.log(Object.keys(transformData));
    expect(challenges.getUnique(challengeNames)).toEqual([constants.challenge.bank, constants.challenge.chitter, null]);
  });

  it("can count number of challenges", () => {
    expect(challenges.count()).toEqual();
  });

  it("can build the data object", () => {
    challenges.build();
    expect(challenges.data.length).toEqual(2);
    expect(Object.keys(challenges.data[0])).toEqual(["type","percentage"]);
    expect(Object.values(challenges.data[0])).toEqual([constants.challenge.bank,"50.00"]);
  });

});
