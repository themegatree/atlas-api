describe('Cohorts', function () {
  it('returns cohorts to main api', function () {
    cy.task('taskTruncateTables').then(() => {
      cy.task('taskCreateCohort');
      cy.request({
        method: 'GET',
        url: '/api/cohorts',
      }).should((res) => {
        expect(res.body.cohorts.length).to.eq(3);
        expect(res.body.cohorts[0].name).to.eq('A test');
        expect(res.status).to.eq(200);
      });
    });
  });

    it('returns cohorts to sort by name in ascending order', function () {
      cy.task('taskTruncateTables').then(() => {
        cy.task('taskCreateCohort');
        cy.request({
          method: 'GET',
          url: '/api/cohorts?sort=name',
        }).should((res) => {
          expect(res.body.cohorts.length).to.eq(3);
          expect(res.body.cohorts[0].name).to.eq('A test');
          expect(res.status).to.eq(200);
        });
      });
    });

    it('returns cohorts to sort by date in ascending', function () {
      cy.task('taskTruncateTables').then(() => {
        cy.task('taskCreateCohort');
        cy.request({
          method: 'GET',
          url: '/api/cohorts?sort=startDate',
        }).should((res) => {
          expect(res.body.cohorts.length).to.eq(3);
          expect(res.body.cohorts[0].name).to.eq('A test');
          expect(res.status).to.eq(200);
        });
      });
    });

    it('returns cohorts to sort in descending order by name', function () {
      cy.task('taskTruncateTables').then(() => {
        cy.task('taskCreateCohort');
        cy.request({
          method: 'GET',
          url: '/api/cohorts?sort=name&order=DESC',
        }).should((res) => {
          expect(res.body.cohorts.length).to.eq(3);
          expect(res.body.cohorts[0].name).to.eq('C test');
          expect(res.status).to.eq(200);
        });
      });
    });

    it('returns cohorts to sort in descending order by date', function () {
      cy.task('taskTruncateTables').then(() => {
        cy.task('taskCreateCohort');
        cy.request({
          method: 'GET',
          url: '/api/cohorts?sort=startDate&order=DESC',
        }).should((res) => {
          expect(res.body.cohorts.length).to.eq(3);
          expect(res.body.cohorts[0].name).to.eq('C test');
          expect(res.status).to.eq(200);
        });
      });
    });

});
