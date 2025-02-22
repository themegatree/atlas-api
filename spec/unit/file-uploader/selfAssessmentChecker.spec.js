const SelfAssessmentChecker = require("../../../src/fileUpload/selfAssessment");

describe("Self Assessments Unit test", () => {
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
  
  it("shows no errors for values between 1 and 5", async () => {
    const selfAssessmentChecker = new SelfAssessmentChecker();
    selfAssessmentChecker.learningScoreCheck(learningMockData[0]);
    expect(selfAssessmentChecker.errors).toEqual([]);
  });
  it("shows errors for values over 5", async () => {
    const selfAssessmentChecker = new SelfAssessmentChecker();
    learningMockData[0].confidenceScore = 9;
    learningMockData[0].overallScore = 1000;
    selfAssessmentChecker.learningScoreCheck(learningMockData[0]);
    expect(selfAssessmentChecker.errors).toEqual([
      "The score: 9 on line 1 does not exist or is not within the limits for confidence score.",
      "The score: 1000 on line 1 does not exist or is not within the limits for overall score."
    ]);
  });
  it("shows errors for values less than 1", async () => {
    const selfAssessmentChecker = new SelfAssessmentChecker();
    learningMockData[0].confidenceScore = 0;
    learningMockData[0].overallScore = -1000;
    selfAssessmentChecker.learningScoreCheck(learningMockData[0]);
    expect(selfAssessmentChecker.errors).toEqual([
      "The score: 0 on line 1 does not exist or is not within the limits for confidence score.",
      "The score: -1000 on line 1 does not exist or is not within the limits for overall score."
    ]);
  });
});
