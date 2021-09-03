require("dotenv").config();
const constants = require("../../../constants");

const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");
const { Student } = require("../../../models");

const TransformData = require("../../../src/reports/transformData");
const buildattributeData = require("../../../src/reports/buildAttributeData");

describe("test challenge class:", () => {
  
  let cohortData, transformData;

  beforeEach( async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    
    cohortData = await Student.queryBy({CohortId: 1});
    transformData = new TransformData();
    transformData.build(cohortData.rows);
  });

  it("objects have correct keys", function(){ 
    const genderObj = buildattributeData(transformData,"gender");
    expect(Object.keys(genderObj[0])).toEqual(["type","number","percentage"]);
  });

  it("gender objects have correct values", function(){ 
    const genderObj = buildattributeData(transformData,"gender");  
    expect(Object.values(genderObj[0])).toEqual([constants.gender.male,1,"25.00"]);
    expect(Object.values(genderObj[1])).toEqual([constants.gender.female,3,"75.00"]);
    expect(Object.values(genderObj[2])).toEqual([constants.gender.preferNotToSay,0,"0.00"]);
  });

  it("background objects have correct values", function(){ 
    const backgroundObj = buildattributeData(transformData,"background"); 
    console.log(backgroundObj); 
    expect(Object.values(backgroundObj[0])).toEqual([constants.background.white,1,"25.00"]);
    expect(Object.values(backgroundObj[1])).toEqual([constants.background.asian,0,"0.00"]);
    expect(Object.values(backgroundObj[2])).toEqual([constants.background.black,2,"50.00"]);
  });

})