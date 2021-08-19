require('dotenv').config();

describe('background ratio test', () => {

  it('calculates background ratio from background data', async () => {
    const challengeRatio = require('../../src/reports/challengeRatio');
    const CohortId = 1;
    const challengeArr = await backgroundRatio(CohortId);

    expect(challengeArr[1].type).toBe("Bank")
  })
})