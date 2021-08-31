require("dotenv").config();
const truncateTables = require("../../../test/ReportGroupTests/truncate-tables"); 
const createCohorts = require("../../../test/ReportGroupTests/create-cohorts");
const createStudents = require("../../../test/ReportGroupTests/create-students");
const backgroundRatio = require("../../../src/dashboard/backgroundRatio");

describe("background ratio test", () => {
  let backgroundArr;
  beforeEach( async () => { 
    await truncateTables();
    await createCohorts();
    await createStudents();
    backgroundArr = await backgroundRatio();
  });

  it("calculates background ratio from background data", async () => {
    expect(backgroundArr[0].percentage).toEqual("20.00");
    expect(backgroundArr[1].percentage).toEqual("40.00");
  });

  it("determines the number of students with a given background", async () => {
    expect(backgroundArr[0].number).toEqual(1);
    expect(backgroundArr[1].number).toEqual(2);
  });
});