require('dotenv').config();

describe('gender ratio test', () => {

  beforeEach( async () => {  

  })

  it('calculates gender ratio from gender data', async () => {
    const genderRatio = require('../src/genderRatio');

    const ratios = await genderRatio();
    console.log(ratios);
  

    expect(ratios).toEqual([0.25,0.75]);

  });
  
});
