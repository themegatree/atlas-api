require('dotenv').config();

fdescribe('background ratio test', () => {

  beforeEach( async () => {  

  })

  it('calculates background ratio from background data', async () => {
    const backgroundRatio = require('../../src/reports/backgroundRatio');

    const cohortId = 1;
    const backgroundObj = await backgroundRatio(cohortId);

    expect(backgroundObj.Black.percentage).toEqual(50);
    expect(backgroundObj.White).toEqual({
      number: 1,
      percentage: 25
    })
  });
  
});
