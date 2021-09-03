const constants = require("../../../constants");

const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");

const buildReportFor = require("../../../src/reports/buildReportFor");

describe('test report data can be built:', () => {
  let reportData, cohortId;

  beforeEach( async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    cohortId = 1;
    reportData = await buildReportFor(cohortId);
  });

  it("returns correct gender data", function(){ 
    const genderData = reportData.gender;  
    expect(Object.values(genderData[0])).toEqual([constants.gender.male,1,"25.00"]);
    expect(Object.values(genderData[1])).toEqual([constants.gender.female,3,"75.00"]);
    expect(Object.values(genderData[2])).toEqual([constants.gender.preferNotToSay,0,"0.00"]);
  });

  it("returns correct background data", function(){ 
    const backgroundObj = reportData.background; 
    expect(Object.values(backgroundObj[0])).toEqual([constants.background.white,1,"25.00"]);
    expect(Object.values(backgroundObj[1])).toEqual([constants.background.asian,0,"0.00"]);
    expect(Object.values(backgroundObj[2])).toEqual([constants.background.black,2,"50.00"]);
  });


  it("returns correct challenge data", () => {
    const challengeData = reportData.challenges; 
    expect(Object.values(challengeData[0])).toEqual([constants.challenge.bank,"100.00"]);
    expect(Object.values(challengeData[1])).toEqual([constants.challenge.chitter,"67.00"]);
  });
  
  
});
