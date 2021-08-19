require('dotenv').config();

describe('background ratio test', () => {

  fit('calculates background ratio from background data', async () => {
    const backgroundRatio = require('../../src/reports/backgroundRatio');

    const CohortId = 1;
    const backgroundObj = await backgroundRatio(CohortId);

    expect(backgroundObj.Black.percentage).toEqual(50);
    expect(backgroundObj.White).toEqual({
      number: 1,
      percentage: 25
    })
  });
  
});
