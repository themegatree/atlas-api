const constants = require("../../constants");
describe("Testing if api request works", function() {
  beforeEach(() => {
    cy.task("taskTruncateTables");
    cy.task("taskCreateCohorts");
    cy.task("taskCreateStudents");
    cy.task("taskCreateModuleChallenges");
  });
  it("use api to return complete report", function() {
    cy.request({
      method:"GET",
      url: "api/cohorts/1/reports"
    }).should((res) => {
      expect((res.body.report.gender[0].number)).to.eq(1);
      expect((res.body.report.gender[1].number)).to.eq(3);
      expect((res.body.report.background[0].type)).to.eq(constants.background.white);
      expect((res.body.report.background[1].percentage)).to.eq("50.00");
      expect((res.body.report.challenges[0].percentage)).to.eq("100.00");
      expect((res.body.report.challenges[1].type)).to.eq(constants.challenge.chitter);
    });
  });
});
