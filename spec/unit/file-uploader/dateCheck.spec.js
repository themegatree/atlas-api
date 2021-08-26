const dateCheck = require("../../../src/dateCheck");

describe("DateCheck", () => {
  it("shows no errors for values before current date", () => {
    const errors = dateCheck("08/17/2021 15:45", "08/17/2021 15:45", 5);
    expect(errors).toEqual([]);
  });
  it("shows errors for values after current date", () => {
    const errors = dateCheck("08/17/2098 15:45", "08/17/2099 15:45", 5);
    expect(errors).toEqual([
      "Due date: 08/17/2098 15:45 is invalid, on line 5",
      "Submission date: 08/17/2099 15:45 is invalid, on line 5"
    ]);
  });
});
