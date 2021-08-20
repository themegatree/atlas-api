require('dotenv').config();
const truncateTables = require('../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../test/ReportGroupTests/create-students')
const createModuleChallenges = require('../../test/ReportGroupTests/create-module-challenges')

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
    expect(challengeArr[1].type).toBe("Chitter")
  })
})