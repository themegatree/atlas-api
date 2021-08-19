require('dotenv').config();

describe('background ratio test', () => {

  it('calculates background ratio from background data', async () => {
    const backgroundRatio = require('../../src/reports/backgroundRatio');

    const CohortId = 1;
    const backgroundArr = await backgroundRatio(CohortId);

    expect(backgroundArr[0].percentage).toEqual(25);
    expect(backgroundArr[1].percentage).toEqual(50);
 
  });
  
});
