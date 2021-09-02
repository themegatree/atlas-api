describe("Indivdual Cohorts", function () {
    beforeEach(() => {
      cy.task("taskTruncateTables");
      cy.task("taskCreateCohort");
      cy.task("taskCreateStudentList");
    });
  
    it("renders indivual cohort page", function () {
      cy.request({
        method: "GET",
        url: "/api/cohorts/1",
      }).should((res) => {
        const cohort = res.body.cohort;
        expect(cohort.name).to.eq("A-Cohort");
        expect(cohort.startDate.substring(0, 10)).to.eq("2021-01-12");
        expect(cohort.leadCoach).to.eq("Ed");
        expect(cohort.cohortSize).to.eq("4");
        expect(res.status).to.eq(200);
      });
    });
  
    it("renders indivual cohort page 2", function () {
      cy.request({
        method: "GET",
        url: "/api/cohorts/2",
      }).should((res) => {
        const cohort = res.body.cohort;
        expect(cohort.name).to.eq("B-Cohort");
        expect(cohort.startDate.substring(0, 10)).to.eq("2021-02-12");
        expect(cohort.leadCoach).to.eq("Lisa");
        expect(cohort.cohortSize).to.eq("2");
        expect(res.status).to.eq(200);
      });
    });
  
    it("renders indivual cohort page 3", function () {
      cy.request({
        method: "GET",
        url: "/api/cohorts/3",
      }).should((res) => {
        const cohort = res.body.cohort;
        expect(cohort.name).to.eq("C-Cohort");
        expect(cohort.startDate.substring(0, 10)).to.eq("2021-03-12");
        expect(cohort.leadCoach).to.eq("Sam");
        expect(cohort.cohortSize).to.eq("1");
        expect(res.status).to.eq(200);
      });
    });
    
    it("renders indivual cohort page 4", function () {
      cy.request({
        method: "GET",
        url: "/api/cohorts/4",
      }).should((res) => {
        const cohort = res.body.cohort;
        expect(cohort.name).to.eq("D-Cohort");
        expect(cohort.startDate.substring(0, 10)).to.eq("2021-04-12");
        expect(cohort.leadCoach).to.eq("Ben");
        expect(cohort.cohortSize).to.eq("0");
        expect(res.status).to.eq(200);
      });
    });
  });