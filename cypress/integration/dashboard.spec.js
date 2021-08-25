describe('Dashboard Router Test', () => {

  beforeEach(() => {
    cy.task('taskTruncateTables');
    cy.task('taskCreateCohorts');
    cy.task('taskCreateStudents');
    cy.task('taskCreateModuleChallenges');
  })


  it('returns dashboard object', () => {
    cy.request('GET', '/api/dashboard').then(
      (res) => {
        expect(res.body).to.have.property('dashboard') 
      }
    )
  });

  it('dashboard object has correct keys', () => {
    cy.request('GET', '/api/dashboard').then(
      (res) => {
      expect(res.body.dashboard).to.have.property('studentTotal')
      expect(res.body.dashboard).to.have.property('cohortsTotal')
      expect(res.body.dashboard).to.have.property('gender')
      expect(res.body.dashboard).to.have.property('background')
      expect(res.body.dashboard).to.have.property('challenges')

      }
    )
  })

  it('returns correct students total', () => {
    cy.request('GET', '/api/dashboard').then( (res) => {
      expect(res.body.dashboard.studentTotal).should('equal', 5)
    })    
  })

  it('returns correct cohorts total', () => {
    cy.request('GET', '/api/dashboard').then( (res) => {
      expect(res.body.dashboard.cohortsTotal).should('equal', 2)
    })    
  })

   it('returns correct gender object', () => {
    cy.request('GET', '/api/dashboard').then( (res) => {
      expect(res.body.dashboard.gender.length).should('equal', 2);
      expect(res.body.dashboard.gender[0]).should('equal',{type: 'male', number: 1, percentage: '20.00'})
      expect(res.body.dashboard.gender[1]).should('equal',{type: 'female', number: 4, percentage: '80.00'})
    })    
  })

  it('returns correct background object', () => {
    cy.request('GET', '/api/dashboard').then((res) => {
      expect(res.body.dashboard.background.length).should('equal', 3)
      expect(res.body.dashboard.background[0]).should('equal',{type: 'White', number: 1, percentage: '20.00'})
      expect(res.body.dashboard.background[1]).should('equal',{type: 'Black', number: 2, percentage: '40.00'})
      expect(res.body.dashboard.background[2]).should('equal',{type: 'Other', number: 2, percentage: '40.00'})  
    })    
  })

  it('returns correct challenges object', () => {
    cy.request('GET', '/api/dashboard').then((res) => {
      expect(res.body.dashboard.challenges.length).should('equal', 2)
      expect(res.body.dashboard.challenges[0]).should('equal',{type: 'bank', percentage: '100.00'})
      expect(res.body.dashboard.challenges[1]).should('equal',{type: 'Chitter', percentage: '66.67'})
    })
  })


  
});
