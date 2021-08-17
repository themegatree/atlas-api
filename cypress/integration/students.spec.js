describe("Cohorts", function() {
  beforeEach(function() {
    cy.task('taskTruncateTables')
  })
  
  it("returns students", function() {
    cy.task('taskCreateStudent')
    cy.request({
      method: "GET",
      url: "api/students"
    }).should(res => {
      expect(res.body.students.length).to.eq(1)
      expect(res.body.students[0].firstName).to.eq("test")
      expect(res.body.students[0].lastName).to.eq("student")
      expect(res.body.students[0].githubUsername).to.eq("teststudentgit")
      expect(res.body.students[0].email).to.eq("test@email.com")
      expect(res.status).to.eq(200)
    })
  })
})
  