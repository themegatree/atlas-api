const headerChecker = require("../../../src/fileUpload/headerCheck");

describe("Testing header checker functions" , () => {
  let headerMocks = [];
  beforeEach(() =>{
    headerMocks = ["StudentId", "confidenceScore", "overallScore", "studentReason", "studentFeedback", "dueDate", "submissionDate"];
  });
    
  it("checking the headerChecker functions works with no errors", () => {
    const result = headerChecker(headerMocks);
    expect(result.validFile).toEqual(true);
    expect(result.fileType).toEqual("selfAssessment");
  });
  it("checking the headerChecker functions works with errors", () => {
    headerMocks[0] = "Failing Header";
    const result = headerChecker(headerMocks);
    expect(result.validFile).toEqual(false);
    expect(result.errors).toEqual("Headers: [Failing Header,confidenceScore,overallScore,studentReason,studentFeedback,dueDate,submissionDate] does not match any valid headers");
  });
  
});