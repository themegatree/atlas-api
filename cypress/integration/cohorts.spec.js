describe("Cohorts", function () {
  it("returns cohorts to main api", function () {
    cy.task("taskTruncateTables").then(() => {
      cy.task("taskCreateCohort");
      cy.request({
        method: "GET",
        url: "/api/cohorts",
      }).should((res) => {
        expect(res.body.cohorts.length).to.eq(1);
        expect(res.body.cohorts[0].name).to.eq("test cohort");
        expect(res.status).to.eq(200);
      });
    });
  });

    it("returns cohorts to /api/cohorts?sort=date&order=descending", function () {
      cy.task("taskTruncateTables").then(() => {
        cy.task("taskCreateCohort");
        cy.request({
          method: "GET",
          url: "/api/cohorts?sort=date&order=descending",
        }).should((res) => {
          expect(res.body.cohorts.length).to.eq(1);
          expect(res.body.cohorts[0].name).to.eq("test cohort");
          expect(res.status).to.eq(200);
        });
      });
    });
});
