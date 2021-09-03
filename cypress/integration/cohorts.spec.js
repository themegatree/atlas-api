describe("Cohorts List", function () {
  beforeEach(() => {
    cy.task("taskTruncateTables");
    cy.task("taskCreateCohort");
  });
  it("returns cohorts to default query parameters - sort=name&order=ASC", function () {
    cy.request({
      method: "GET",
      url: "/api/cohorts",
    }).should((res) => {
      expect(res.body.cohorts.length).to.eq(4);
      expect(res.body.cohorts[0].name).to.eq("A-Cohort");
      expect(res.status).to.eq(200);
    });
  });

  it("returns cohorts to sort by name in default ascending order", function () {
    cy.request({
      method: "GET",
      url: "/api/cohorts?sort=name",
    }).should((res) => {
      expect(res.body.cohorts.length).to.eq(4);
      expect(res.body.cohorts[0].name).to.eq("A-Cohort");
      expect(res.status).to.eq(200);
    });
  });

  it("returns cohorts to sort by date in default ascending order", function () {
    cy.request({
      method: "GET",
      url: "/api/cohorts?sort=startDate",
    }).should((res) => {
      expect(res.body.cohorts.length).to.eq(4);
      expect(res.body.cohorts[0].name).to.eq("A-Cohort");
      expect(res.status).to.eq(200);
    });
  });

  it("returns cohorts to sort by name and in ascending order", function () {
    cy.request({
      method: "GET",
      url: "/api/cohorts?sort=name&order=ASC",
    }).should((res) => {
      expect(res.body.cohorts.length).to.eq(4);
      expect(res.body.cohorts[0].name).to.eq("A-Cohort");
      expect(res.status).to.eq(200);
    });
  });

  it("returns cohorts to sort by date and in ascending order", function () {
    cy.request({
      method: "GET",
      url: "/api/cohorts?sort=startDate&order=ASC",
    }).should((res) => {
      expect(res.body.cohorts.length).to.eq(4);
      expect(res.body.cohorts[0].name).to.eq("A-Cohort");
      expect(res.status).to.eq(200);
    });
  });

  it("returns cohorts to sort in descending order by name", function () {
    cy.request({
      method: "GET",
      url: "/api/cohorts?sort=name&order=DESC",
    }).should((res) => {
      expect(res.body.cohorts.length).to.eq(4);
      expect(res.body.cohorts[0].name).to.eq("D-Cohort");
      expect(res.status).to.eq(200);
    });
  });

  it("returns cohorts to sort in descending order by date", function () {
    cy.request({
      method: "GET",
      url: "/api/cohorts?sort=startDate&order=DESC",
    }).should((res) => {
      expect(res.body.cohorts.length).to.eq(4);
      expect(res.body.cohorts[0].name).to.eq("D-Cohort");
      expect(res.status).to.eq(200);
    });
  });

  it("returns cohorts to default query when passing invalid query inputs", function () {
    cy.request({
      method: "GET",
      url: "/api/cohorts?sort=XYZ&order=ABC",
    }).should((res) => {
      expect(res.body.errors[0]).to.eq("Sorry invalid query parameters");
      expect(res.status).to.eq(200);
    });
  });
});