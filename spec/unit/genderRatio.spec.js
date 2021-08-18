require('dotenv').config();

describe('gender ratio test', () => {

  it('calculates gender ratio from gender data', async () => {
    const genderRatio = require('../../src/reports/genderRatio');
    
    const CohortId = 1;
    const gendersArr = await genderRatio(CohortId);
  
    expect(gendersArr.female.number).toEqual(3)
    expect(gendersArr.male.number).toEqual(1)
    expect(gendersArr.male.percentage).toEqual(25)

  });
  
});
