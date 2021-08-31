const Report = require('../../../src/reports/ReportRefactored');

const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");

describe('test the report class', () => {
  let report, cohortId;
  let result; 

  beforeEach( async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    report = new Report();
    cohortId = 1;
    result = await report.build(cohortId);
  });

  it('shows gender information', () => {
    expect(result.gender.length).toEqual(2);
    expect(result.gender[0].type).toEqual("male");
    expect(result.gender[0].number).toEqual(1);
    expect(result.gender[0].percentage).toEqual("25.00");
  });
  
});
