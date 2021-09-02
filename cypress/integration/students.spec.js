describe("Students", function() {
  it("returns students", function() {
    cy.task("taskTruncateTables")
      .then(() => {
        cy.task("taskCreateStudent");
        cy.request({
          method: "GET",
          url: "api/students"
        }).then(res => {
          expect(res.body.students.length).to.eq(4);
          cy.get(res.body.students).each((item,index) => {
            cy.wrap(item.firstName).should("contain", res.body.students[index].firstName);
            cy.wrap(item.lastName).should("contain", res.body.students[index].lastName);
            cy.wrap(item.githubUsername).should("contain", res.body.students[index].githubUsername);
            cy.wrap(item.email).should("contain", res.body.students[index].email);
            cy.wrap(item.gender).should("contain", res.body.students[index].gender);
            cy.wrap(item.background).should("contain", res.body.students[index].background);
          });
        });
      });
  });
});

describe("Updating Students", function() {
  beforeEach(() => {
    cy.task("taskTruncateTables");
    cy.task("taskCreateStudent");
  });
  it("returns error for non-existant student", function() {
    cy.request({
      method: "PUT",
      url: "api/students/0"
    }).then(res => {
      expect(res.body.status).to.eq("failure");
      expect(res.body.errors).to.eq("missing record");
    });
  });
  it("returns error for invalid parameters", function() {
    cy.request({
      method: "PUT",
      url: "api/students/1",
      body: {invalid: "invalid"}
    }).then(res => {
      expect(res.body.status).to.eq("failure");
      expect(res.body.errors).to.eq("invalid params");
    });
  });
  it("returns error for blank input", function() {
    cy.request({
      method: "PUT",
      url: "api/students/1",
      body: {firstName: ""}
    }).then(res => {
      expect(res.body.status).to.eq("failure");
      expect(res.body.errors).to.eq("no input");
    });
  });
  it("returns a successful update", function() {
    cy.request({
      method: "PUT",
      url: "api/students/1",
      body: {firstName: "Fred"}
    }).then(res => {
      expect(res.body.status).to.eq("success");
      expect(res.body.student.firstName).to.eq("Fred");
    });
  });
});