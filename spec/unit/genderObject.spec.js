require('dotenv').config();
const truncateTables = require('../../test/truncate-tables') 
const createCohorts = require('../../test/create-cohorts')
const createStudents = require('../../test/create-students')
describe('gender ratio test', () => {

  beforeEach( async () => { 
    await truncateTables()
    await createCohorts()
    await createStudents()
   })

  it('calculates gender ratio from gender data', async () => {
    const genderRatio = require('../../src/reports/genderRatio');
    
    const CohortId = 1;
    const gendersArr = await genderRatio(CohortId);
  
    expect(gendersArr[1].type).toEqual('female')
    expect(gendersArr[1].number).toEqual(3)
    expect(gendersArr[0].percentage).toEqual('25.00')

  });
  
});
