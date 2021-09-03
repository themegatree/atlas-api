require("dotenv").config();

const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");
const { Student } = require("../../../models");

const getUniqueStudentData = require("../../../src/reports/getUniqueStudentData.js");

describe("Test unique student data function:", () => {

  let cohortData;

  beforeEach( async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    cohortData = await Student.queryBy({CohortId: 1});
  });

  it("get unique student entries", () => {
    const uniqueData = getUniqueStudentData(cohortData.rows);
    expect(uniqueData.length).toEqual(4);
    expect(uniqueData.map(student => student.id)).toEqual([1,2,3,4]);
  });

});
