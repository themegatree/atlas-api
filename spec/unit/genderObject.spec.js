require('dotenv').config();
const truncateTables = require('../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../test/ReportGroupTests/create-students')
const genderRatio = require('../../src/reports/genderRatio');
describe('gender ratio test', () => {
  let cohortId
  beforeEach( async () => { 
    await truncateTables()
    await createCohorts()
    await createStudents()
    cohortId = 1
   })

  it('calculates gender ratio from gender data', async () => {
    const gendersArr = await genderRatio(cohortId);
  
    expect(gendersArr[1].type).toEqual('female')
    expect(gendersArr[1].number).toEqual(3)
    expect(gendersArr[0].percentage).toEqual('25.00')

  });
  
});
