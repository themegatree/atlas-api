describe("Students", function() {
  it("returns students", function() {
    cy.task("taskTruncateTables")
      .then(() => {
        cy.task("taskCreateStudent");
        cy.request({
          method: "GET",
          url: "api/students"
        }).should(res => {
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
  