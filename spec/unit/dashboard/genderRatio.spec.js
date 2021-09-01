require("dotenv").config();
const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const genderRatio = require("../../../src/dashboard/genderRatio");

describe("gender ratio test", () => {
  let genderArr;
  beforeEach( async () => { 
    await truncateTables();
    await createCohorts();
    await createStudents();
    genderArr = await genderRatio();
  });

  it("calculates gender percentage from gender data", async () => {
    expect(genderArr[0].percentage).toEqual("20.00");
    expect(genderArr[1].percentage).toEqual("80.00");
  });

  it("returns correct gender number", async () => {
    expect(genderArr[0].number).toEqual(1);
    expect(genderArr[1].number).toEqual(4);
  });
});
