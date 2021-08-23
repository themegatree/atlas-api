require('dotenv').config();
const truncateTables = require('../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../test/ReportGroupTests/create-students')
const backgroundRatio = require('../../src/reports/backgroundRatio');
describe('background ratio test', () => {
  let cohortId
  beforeEach( async () => { 
    await truncateTables()
    await createCohorts()
    await createStudents()
    cohortId = 1;
   })

  it('calculates background ratio from background data', async () => {
    const backgroundArr = await backgroundRatio(cohortId);
    expect(backgroundArr[0].percentage).toEqual('25.00');
    expect(backgroundArr[1].percentage).toEqual('50.00');
  });
  
});
