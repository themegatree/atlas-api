require('dotenv').config();

describe('gender ratio test', () => {

  it('calculates gender ratio from gender data', async () => {
    const genderRatio = require('../../src/reports/genderRatio');
    
    const CohortId = 1;
    const gendersObj = await genderRatio(CohortId);
  
    expect(gendersObj.female.number).toEqual(3)
    expect(gendersObj.male.number).toEqual(1)
    expect(gendersObj.male.percentage).toEqual(25)

  });
  
});
