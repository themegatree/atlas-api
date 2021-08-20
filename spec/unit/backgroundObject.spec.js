require('dotenv').config();
const truncateTables = require('../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../test/ReportGroupTests/create-students')
describe('background ratio test', () => {

  beforeEach( async () => { 
    await truncateTables()
    await createCohorts()
    await createStudents()
   })

  it('calculates background ratio from background data', async () => {
    const backgroundRatio = require('../../src/reports/backgroundRatio');
    const CohortId = 1;
    const backgroundArr = await backgroundRatio(CohortId);
    expect(backgroundArr[0].percentage).toEqual('25.00');
    expect(backgroundArr[1].percentage).toEqual('50.00');
  });
  
});
