require("dotenv").config();

const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");
const { Student } = require("../../../models");
const ChallengePercentageCalculator = require("../../../src/reports/Challenges");

const TransformData = require("../../../src/reports/transformData");
//const Challenges = require("../../../src/reports/Challenges");
const constants = require("../../../constants");
//const getChallengePercentages = require("../../../src/reports/Challenges");
const AttributeCount = require("../../../src/reports/genderBackground")
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
    
    // challengeNames = transformData.challengeName;
    // studentScores = transformData.studentScore;
    // challenges = new Challenges();
    // console.log(cohortData)
  });
  it("console.logs stuff we need", function(){
     
    //AttributeCount(transformData,constants.gender)
    AttributeCount(transformData,constants.gender)
  })
})