require('dotenv').config();
const truncateTables = require('../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../test/ReportGroupTests/create-students')
const createModuleChallenges = require('../../test/ReportGroupTests/create-module-challenges')
const challengeRatio = require('../../src/reports/challengeRatio');

describe('background ratio test', () => {
  let cohortId
  beforeEach( async () => { 
    await truncateTables()
    await createCohorts()
    await createStudents()
    await createModuleChallenges()
    cohortId = 1;
   })

  it('calculates background ratio from background data', async () => {
    const challengeArr = await challengeRatio(cohortId);
    expect(challengeArr[1].type).toBe("Chitter")
  })
})