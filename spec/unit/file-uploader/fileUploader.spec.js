const FileUploader = require("../../../src/fileUpload/fileUpload.js");

describe("FileUploader unit test", () => {
  it("Testing the fileConvertor method", () => {
    const mockInput = "studentId,confidenceScore,overallScore,studentReason,studentFeedback,submissionsDate,dueDate\n65,1,2,No reason,No Feedback,08/17/21 14:35,08/17/21 14:35\n1,7,2,No reason,No Feedback,08/17/21 14:35,08/17/21 14:35";
    const fileUploader = new FileUploader();
    const result = fileUploader.fileConvertor(mockInput);
    expect(result).toEqual([{
      studentId: "65",
      confidenceScore: "1",
      overallScore: "2",
      studentReason: "No reason",
      studentFeedback: "No Feedback",
      submissionsDate: "08/17/21 14:35",
      dueDate: "08/17/21 14:35"
    },
    {
      studentId: "1",
      confidenceScore: "7",
      overallScore: "2",
      studentReason: "No reason",
      studentFeedback: "No Feedback",
      submissionsDate: "08/17/21 14:35",
      dueDate: "08/17/21 14:35"
    }
    ]);
  });
});
