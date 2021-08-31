const dateCheck = require("../../../src/fileUpload/dateCheck");

describe("DateCheck", () => {
  let dateMockObject = {};
  beforeEach(() => {
    dateMockObject =
        {
          dueDate: "08/17/2021 15:45",
          submissionDate: "08/17/2021 15:45",
          counter: 5
        };
  });
  it("shows no errors for values before current date", () => {
    const errors = dateCheck(dateMockObject);
    expect(errors).toEqual([]);
  });
  it("shows errors for values after current date", () => {
    dateMockObject.dueDate = "08/17/2098 15:45",
    dateMockObject.submissionDate = "08/17/2099 15:45";
    const errors = dateCheck(dateMockObject);
    expect(errors).toEqual([
      "Due date: 08/17/2098 15:45 is invalid, on line 5",
      "Submission date: 08/17/2099 15:45 is invalid, on line 5"
    ]);
  });
});
