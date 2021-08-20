require('dotenv').config();
const truncateTables = require('../../test/truncate-tables') 
const createCohorts = require('../../test/create-cohorts')
const createStudents = require('../../test/create-students')
const createModuleChallenges = require('../../test/create-module-challenges')

describe('background ratio test', () => {

  beforeEach( async () => { 
    await truncateTables()
    await createCohorts()
    await createStudents()
    await createModuleChallenges()
   })

  it('calculates background ratio from background data', async () => {
    const challengeRatio = require('../../src/reports/challengeRatio');
    const CohortId = 1;
    const challengeArr = await challengeRatio(CohortId);

    console.log(challengeArr)

    expect(challengeArr[1].type).toBe("Chitter")
  })
})