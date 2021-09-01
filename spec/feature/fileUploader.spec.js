const FileUploader = require("../../src/fileUpload/fileUpload.js");
const truncateTables = require("../../test/ReportGroupTests/truncate-tables.js");
const createCohorts = require("../../test/ReportGroupTests/create-cohorts.js");
const createStudents = require("../../test/ReportGroupTests/create-students.js");

describe("FileUploader feature testing", () => {
  beforeEach(async () => {
    await truncateTables();
    await createCohorts();
    await createStudents();
  });
  it("Check the Process function works with no errors", async () => {
    const mockInput = "StudentId,confidenceScore,overallScore,studentReason,studentFeedback,dueDate,submissionDate\n1,1,2,No reason,No Feedback,08/17/21 14:35,08/17/21 14:35\n1,4,2,No reason,No Feedback,08/17/21 14:35,08/17/21 14:35";
    const fileUploader = new FileUploader();
    const result = await fileUploader.process(mockInput);
    expect(result.status).toEqual("success");
    expect(result.errors.length).toEqual(0);
  });
  it("Check the Process function works with errors", async () => {
    const mockInput = "StudentId,confidenceScore,overallScore,studentReason,studentFeedback,dueDate,submissionDate\n65,1,2,No reason,No Feedback,08/17/21 14:35,08/17/21 14:35\n55,4,2,No reason,No Feedback,08/17/21 14:35,08/17/21 14:35";
    const fileUploader = new FileUploader();
    const result = await fileUploader.process(mockInput);
    expect(result.status).toEqual("failure");
    expect(result.errors).toEqual(["Student id: 65 does not exist, on line 1","Student id: 55 does not exist, on line 2" ]);
  });
});
