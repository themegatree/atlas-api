const truncateTables = require('../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../test/ReportGroupTests/create-students')
const createModuleChallenges = require('../../test/ReportGroupTests/create-module-challenges')
const Report = require('../../src/reports/Report');

describe('Test Report Class', () => {
    
    let cohortId
    beforeEach( async () => {
      await truncateTables()
      await createCohorts()
      await createStudents()
      await createModuleChallenges()
      cohortId = 1;
    })

  it('can get genders', async () => {
    const report = new Report();
    const conpleteReport = await report.create(cohortId);  

    expect(conpleteReport.gender).toEqual([
      { type: 'male', number: 1, percentage: '25.00' },
      { type: 'female', number: 3, percentage: '75.00' }
      ]);
    })

    it('can get backgrounds', async () => {
      const report = new Report();
      const conpleteReport = await report.create(cohortId); 

      expect(conpleteReport.background).toEqual([
        { type: 'White', number: 1, percentage: '25.00' },
        { type: 'Black', number: 2, percentage: '50.00' },
        { type: 'Other', number: 1, percentage: '25.00' }
        ]);
    });

    it('can get challenges', async () => {
      const report = new Report();
      const conpleteReport = await report.create(cohortId); 

      expect(conpleteReport.challengeCompletion).toEqual([
        { type: 'bank', percentage: '100.00' },
        { type: 'Chitter', percentage: '66.67' },
      ]);
  });
})