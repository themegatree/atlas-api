const truncateTables = require('../../test/truncate-tables') 
const createCohorts = require('../../test/create-cohorts')
const createStudents = require('../../test/create-students')
const createModuleChallenges = require('../../test/create-module-challenges')

describe('Test Report Class', () => {
    
    
    beforeEach( async () => {

        await truncateTables()
        await createCohorts()
        await createStudents()
        await createModuleChallenges()
    })

  it('can get genders', async () => {

    const Report = require('../../src/reports/Report');
    const CohortId = 1;
    const report = new Report();
    const reportObj = await report.create(CohortId);  

    expect(reportObj.report.gender).toEqual([
        { type: 'male', number: 1, percentage: '25.00' },
        { type: 'female', number: 3, percentage: '75.00' }
        ]);
    })

    it('can get backgrounds', async () => {

      const Report = require('../../src/reports/Report');
      const CohortId = 1;
      const report = new Report();
      const reportObj = await report.create(CohortId); 

          expect(reportObj.report.background).toEqual([
        { type: 'White', number: 1, percentage: '25.00' },
        { type: 'Black', number: 2, percentage: '50.00' },
        { type: 'Other', number: 1, percentage: '25.00' }
        ]);

    });

    it('can get challenges', async () => {
      const Report = require('../../src/reports/Report');
      const CohortId = 1;
      const report = new Report();
      const reportObj = await report.create(CohortId); 


        expect(reportObj.report.challengeCompletion).toEqual([
      { type: 'bank', percentage: '100.00' },
      { type: 'Chitter', percentage: '66.67' },
      ]);
    
  });
})