const SelfAssessmentChecker = require("../../src/fileUpload/selfAssessment");

describe("Self Assessments Feature test ", () => {
  let learningMockData = [];
  beforeEach(() => {
    learningMockData = [
      {
        StudentId: 1,
        confidenceScore: 3,
        overallScore: 3,
        studentReason: "No reason",
        studentFeedback: "No Feedback",
        dueDate: "08/17/21 14:35",
        submissionDate: "08/17/21 14:35",
        counter: 1
      }
    ];
  });
  it("Works with no errors", async () => {
    const selfAssessmentChecker = new SelfAssessmentChecker();
    spyOn(selfAssessmentChecker, "findAllStudents").and.returnValue([{ id: 1 }, { id: 2 }]);
    await selfAssessmentChecker.check(learningMockData);
    expect(selfAssessmentChecker.errors).toEqual([]);
  });
  it("Works with errors", async () => {
    const selfAssessmentChecker = new SelfAssessmentChecker();
    spyOn(selfAssessmentChecker, "findAllStudents").and.returnValue([{ id: 1 }, { id: 2 }]);
    learningMockData[0].confidenceScore = 20;
    await selfAssessmentChecker.check(learningMockData);
    expect(selfAssessmentChecker.errors).toEqual([
      "The score: 20 on line 1 does not exist or is not within the limits for confidence score."
    ]);
  });
});