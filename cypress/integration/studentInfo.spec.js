const constants = require("../../constants");
describe("Retrieves module challenges data of students", function(){
  beforeEach(() => {
    cy.task("taskTruncateTables").then(() => {
      cy.task("taskCreateCohorts");
      cy.task("taskCreateStudents");
      cy.task("taskCreateModuleChallenges");
    });
  });

  it("Retrieves data for a student with an id of 1", function(){
    cy.request({
      method: "GET",
      url: "/api/students/1"
    }).should((res) => {
      const bankChallenge = res.body.student.ModuleChallenges[0];
      const chitterChallenge = res.body.student.ModuleChallenges[1];

      expect(bankChallenge.challengeName).to.eq(constants.challenge.bank);
      expect(bankChallenge.language).to.eq("node");
      expect(bankChallenge.studentScore).to.eq("complete");
      expect(bankChallenge.coachScore).to.eq("complete");
      expect(bankChallenge.dueDate).to.contain("2021-01-08");
      expect(bankChallenge.submissionDate).to.contain("2021-01-08");
      expect(bankChallenge.createdAt).to.contain("2021-01-08");
      expect(bankChallenge.updatedAt).to.contain("2021-01-08");

      expect(chitterChallenge.challengeName).to.eq(constants.challenge.chitter);
      expect(chitterChallenge.language).to.eq("node");
      expect(chitterChallenge.studentScore).to.eq("complete");
      expect(chitterChallenge.coachScore).to.eq("complete");
      expect(chitterChallenge.dueDate).to.contain("2021-01-08");
      expect(chitterChallenge.submissionDate).to.contain("2021-01-08");
      expect(chitterChallenge.createdAt).to.contain("2021-01-08");
      expect(chitterChallenge.updatedAt).to.contain("2021-01-08");

      expect(res.status).eq(200);
    });
  });

  it("Student does not exist", function(){
    cy.request({
      method: "GET",
      url: "/api/students/9"
    }).should((res) => {
      expect(res.body.student).to.be.empty;
      expect(res.status).eq(200);
    });
  });
});
