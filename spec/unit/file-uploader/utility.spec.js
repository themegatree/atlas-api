const {checkArraysAreEqual} = require("../../../src/fileUpload/utility.js");

describe("Utility Unity tests ", () => {
  let headerMocks = [];
  beforeEach(() =>{
    headerMocks = ["StudentId", "confidenceScore", "overallScore", "studentReason", "studentFeedback", "dueDate", "submissionDate"];
  });
  it("checking that the array checker can match identical arrays", () => {
    const array2 = ["StudentId", "confidenceScore", "overallScore", "studentReason", "studentFeedback", "dueDate", "submissionDate"];
    const result = checkArraysAreEqual(headerMocks, array2);
    expect(result).toEqual(true);    

  });
  it("checking that the array checker can returns false if the arrays are not identical", () => {
    const array2 = ["differentHeaders", "notMatching"]; 
    const result = checkArraysAreEqual(headerMocks, array2);
    expect(result).toEqual(false);
  });
  it("checking that the array checker can return false if the second array isn't an array.", () => {
    const fakeObj = {fake: headerMocks};
    const result = checkArraysAreEqual(headerMocks, fakeObj);
    expect(result).toEqual(false);
  });
});