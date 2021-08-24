require('dotenv').config();
const truncateTables = require('../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../test/ReportGroupTests/create-students')
const createModuleChallenges = require('../../test/ReportGroupTests/create-module-challenges')
const challengeRatio = require('../../src/reports/challengeRatio');

describe('background ratio test', () => {
  let cohortId
  let challengeArr

  beforeEach( async () => { 
    await truncateTables()
    await createCohorts()
    await createStudents()
    await createModuleChallenges()
    cohortId = 1;
    challengeArr = await challengeRatio(cohortId);
   })
   
  it('calculates background ratio from background data', async () => {
    expect(challengeArr[1].type).toBe("Chitter")
  })
})