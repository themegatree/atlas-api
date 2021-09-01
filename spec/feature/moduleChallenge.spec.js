const ModuleChallengeChecker = require("../../src/fileUpload/moduleChallenge");

describe("Module Challenge Feature test ", () => {
  let moduleMockData = [];
  beforeEach(() => {
    moduleMockData = [
      {
        StudentId: 1,
        challengeName: "RPS",
        language: "nodejs",
        studentScore: "extended",
        coachScore: "extended",
        dueDate: "08/17/2021 15:45",
        submissionDate: "08/17/2021 15:45",
        counter: 1
      }
    ];
  });
  it("Works with no errors", async () => {
    const moduleChallengeChecker = new ModuleChallengeChecker("No file", "moduleChallenge");
    spyOn(moduleChallengeChecker, "findAllStudents").and.returnValue([{ id: 1 }, { id: 2 }]);
    await moduleChallengeChecker.check(moduleMockData);
    expect(moduleChallengeChecker.errors).toEqual([]);
  });

  it("Works with errors", async () => {
    const moduleChallengeChecker = new ModuleChallengeChecker("No file", "moduleChallenge");
    spyOn(moduleChallengeChecker, "findAllStudents").and.returnValue([{ id: 1 }, { id: 2 }]);
    moduleMockData[0].language = "C#";
    await moduleChallengeChecker.check(moduleMockData);
    const errors = moduleChallengeChecker.errors;
    expect(errors).toEqual(["You have entered an incorrect language on line 1"]);
  });
});