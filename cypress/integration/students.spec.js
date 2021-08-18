describe("Students", function() {
  it("returns students", function() {
    cy.task('taskTruncateTables')
      .then(() => {
        cy.task('taskCreateStudent')
        cy.request({
          method: "GET",
          url: "api/students"
        }).should(res => {
          expect(res.body.students.length).to.eq(4)
          expect(res.body.students[0].firstName).to.eq("Alice")
          expect(res.body.students[0].lastName).to.eq("Williams")
          expect(res.body.students[0].githubUsername).to.eq("alicewilliamsgit")
          expect(res.body.students[0].email).to.eq("awilliams@email.com")
          expect(res.status).to.eq(200)
      })
    })
  })
})
  