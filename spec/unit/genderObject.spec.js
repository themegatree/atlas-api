require("dotenv").config();
const truncateTables = require("../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../test/ReportGroupTests/create-students");
const genderRatio = require("../../src/reports/genderRatio");
const nodataStudents = require("../../test/ReportGroupTests/create-students-nodata");
const constants = require("../../constants");
describe("gender ratio test", () => {
  let cohortId, genders;
  beforeEach( async () => { 
    await truncateTables();
    await createCohorts();
    await createStudents();
    cohortId = 1;
    genders = await genderRatio(cohortId);
  });
  it("calculates gender ratio from gender data", async () => {
    expect(genders[1].type).toEqual(constants.gender.female);
    expect(genders[1].number).toEqual(3);
    expect(genders[0].percentage).toEqual("25.00");
  });
});

describe("testing students with no data", function() {
  let cohortId, genders;
  beforeEach( async () => { 
    await truncateTables();
    await createCohorts();
    await nodataStudents();
    cohortId = 1;
    genders = await genderRatio(cohortId);
  });
  it("calculates gender ratio from gender data when one student has no gender data", async () => {
    expect(genders[0].type).toEqual("no data");
    expect(genders[0].number).toEqual(1);
    expect(genders[0].percentage).toEqual("50.00");
  });
});
