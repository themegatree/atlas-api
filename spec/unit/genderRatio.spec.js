require('dotenv').config();

describe('gender ratio test', () => {

  it('calculates gender ratio from gender data', async () => {
    const genderRatio = require('../../src/reports/genderRatio');
    
    const CohortId = 1;
    const gendersArr = await genderRatio(CohortId);
    console.log("Genders Array");
    console.log(gendersArr)
  
    expect(gendersArr[1].type).toEqual('female')
    expect(gendersArr[1].number).toEqual(3)
    expect(gendersArr[0].percentage).toEqual(25)

  });
  
});
