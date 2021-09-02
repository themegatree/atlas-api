require("dotenv").config();

const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");
const { Student } = require("../../../models");

const TransformData = require("../../../src/reports/transformData");
const constants = require("../../../constants");

describe("Test transformData:", () => {

  let transformData;
  let cohortData;

  beforeEach( async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    cohortData = await Student.queryBy({CohortId: 1});
    transformData = new TransformData();
    transformData.build(cohortData.rows);
  });

  it("get unique student entries", () => {
    const uniqueData = transformData.getUnique(cohortData.rows);
    expect(uniqueData.length).toEqual(4);
    expect(uniqueData.map(student => student.id)).toEqual([1,2,3,4]);
  });
  
  it("get student challenge names", async () => {
    console.log("Raw Data")
    console.log(cohortData);
    console.log("Challenges")
    console.log(transformData.challengeName);
    expect(transformData.challengeName).toEqual([constants.challenge.bank,constants.challenge.chitter,constants.challenge.bank,constants.challenge.chitter,constants.challenge.bank,constants.challenge.chitter,null]);
  });

  it("get student score", () => {
    expect(transformData.studentScore).toEqual(["complete","complete","complete","complete","complete","incomplete",null]);
  });

  it("get student background", () => {
    expect(transformData.background).toEqual([constants.background.white,constants.background.black,constants.background.black,constants.background.other]);
  });

  it("get student gender", () => {
    expect(transformData.gender).toEqual([constants.gender.male,constants.gender.female,constants.gender.female,constants.gender.female]);
  });

  // it("get challenge data", () => {

  // });

});
