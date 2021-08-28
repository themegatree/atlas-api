describe("Retrieves module challenges data of students", function(){
    beforeEach(() => {
        cy.task('taskTruncateTables').then(() => {
        cy.task('taskCreateCohorts')
        cy.task('taskCreateStudents')
        cy.task('taskCreateModuleChallenges')
        })
    })

    it('Retrieves data for a student with an id of 1', function(){
        cy.request({
            method: 'GET',
            url: '/api/students/1'
        }).should((res) => {
            expect(res.body.student.ModuleChallenges[0].challengeName).to.eq('bank')
            expect(res.body.student.ModuleChallenges[0].language).to.eq('node')
            expect(res.body.student.ModuleChallenges[0].studentScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[0].coachScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[0].dueDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[0].submissionDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[0].createdAt).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[0].updatedAt).to.contain('2021-01-08')

            expect(res.body.student.ModuleChallenges[1].challengeName).to.eq('Chitter')
            expect(res.body.student.ModuleChallenges[1].language).to.eq('node')
            expect(res.body.student.ModuleChallenges[1].studentScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[1].coachScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[1].dueDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[1].submissionDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[1].createdAt).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[1].updatedAt).to.contain('2021-01-08')
            
            expect(res.status).eq(200)
        })
    })

    it('Retrieves data for a student with an id of 2', function(){
        cy.request({
            method: 'GET',
            url: '/api/students/2'
        }).should((res) => {
            expect(res.body.student.ModuleChallenges[0].challengeName).to.eq('bank')
            expect(res.body.student.ModuleChallenges[0].language).to.eq('node')
            expect(res.body.student.ModuleChallenges[0].studentScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[0].coachScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[0].dueDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[0].submissionDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[0].createdAt).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[0].updatedAt).to.contain('2021-01-08')

            expect(res.body.student.ModuleChallenges[1].challengeName).to.eq('Chitter')
            expect(res.body.student.ModuleChallenges[1].language).to.eq('node')
            expect(res.body.student.ModuleChallenges[1].studentScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[1].coachScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[1].dueDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[1].submissionDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[1].createdAt).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[1].updatedAt).to.contain('2021-01-08')
            
            expect(res.status).eq(200)
        })
    })

    it('Retrieves data for a student with an id of 3', function(){
        cy.request({
            method: 'GET',
            url: '/api/students/3'
        }).should((res) => {
            expect(res.body.student.ModuleChallenges[0].challengeName).to.eq('bank')
            expect(res.body.student.ModuleChallenges[0].language).to.eq('node')
            expect(res.body.student.ModuleChallenges[0].studentScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[0].coachScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[0].dueDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[0].submissionDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[0].createdAt).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[0].updatedAt).to.contain('2021-01-08')

            expect(res.body.student.ModuleChallenges[1].challengeName).to.eq('Chitter')
            expect(res.body.student.ModuleChallenges[1].language).to.eq('node')
            expect(res.body.student.ModuleChallenges[1].studentScore).to.eq('incomplete')
            expect(res.body.student.ModuleChallenges[1].coachScore).to.eq('complete')
            expect(res.body.student.ModuleChallenges[1].dueDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[1].submissionDate).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[1].createdAt).to.contain('2021-01-08')
            expect(res.body.student.ModuleChallenges[1].updatedAt).to.contain('2021-01-08')

            expect(res.status).eq(200)
        })
    })
})