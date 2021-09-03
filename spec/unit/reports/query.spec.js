require("dotenv").config();
const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const createModuleChallenges = require("../../../test/ReportGroupTests/create-module-challenges");
const { Student } = require("../../../models");

const constants = require("../../../constants");

describe("information we get back from query is correct", function() {
  let rawQuery;
  beforeEach( async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
    await createModuleChallenges();
    rawQuery = await Student.queryBy({CohortId: 1});
  });

  it("queries the correct challenges", async function() {
    console.log(rawQuery);
    expect(rawQuery.rows[0]["ModuleChallenges.studentScore"]).toEqual("complete");  
  });

  it("queries gender information correctly", async function() {
    expect(rawQuery.rows[0].gender).toEqual(constants.gender.male);
    expect(rawQuery.rows[1].gender).toEqual(constants.gender.male);
    expect(rawQuery.rows[2].gender).toEqual(constants.gender.female);
    expect(rawQuery.rows[3].gender).toEqual(constants.gender.female);
  });

  it("queries background information correctly", async function() {
    expect(rawQuery.rows[0].background).toEqual(constants.background.white);
    expect(rawQuery.rows[1].background).toEqual(constants.background.white);
    expect(rawQuery.rows[2].background).toEqual(constants.background.black);
    expect(rawQuery.rows[3].background).toEqual(constants.background.black);
  });
});
