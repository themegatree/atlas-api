describe("file history feature tests: ", function () {
  beforeEach(() => {
    cy.task("taskTruncateTables");
    cy.task("taskCreateCohorts");
    cy.task("taskCreateStudents");
  });


  it("Testing that history saves corrrect data for passing file", () => {
    cy.fixture("/csv-files/ModuleChallenges/passingmock.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();
      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "moduleChallenge");

      cy.request({
        method: "POST",
        url: "api/fileUpload",
        body: formData
      });

      cy.request({
        method: "POST",
        url: "api/fileUpload/history"
      }).should(res =>{
        expect(res.body.history[0].status).to.eq("Success");
        expect(res.body.history[0].uploadType).to.eq("moduleChallenge");
      });
    });
  });
  it("Testing that history saves corrrect data for failing file", () => {
    cy.fixture("/csv-files/ModuleChallenges/failingmock.csv").then(fileContent => {
      const blob = new Blob([fileContent], { type: "text/csv" });
      const formData = new FormData();
      formData.append("myFile", blob, blob.name);
      formData.append("assessmentType", "moduleChallenge");

      cy.request({
        method: "POST",
        url: "api/fileUpload",
        body: formData
      });

      cy.request({
        method: "POST",
        url: "api/fileUpload/history"
      }).should(res =>{
        expect(res.body.history[0].status).to.eq("Failure");
        expect(res.body.history[0].uploadType).to.eq("moduleChallenge");
      });
    });
  });
});
