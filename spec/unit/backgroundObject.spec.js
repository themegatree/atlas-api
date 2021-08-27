require('dotenv').config();
const truncateTables = require('../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../test/ReportGroupTests/create-students')
const backgroundRatio = require('../../src/reports/backgroundRatio');
const nodataStudents = require('../../test/ReportGroupTests/create-students-nodata')
describe('background ratio test', () => {
  let cohortId, backgrounds
  beforeEach( async () => { 
    await truncateTables()
    await createCohorts()
    await createStudents()
    cohortId = 1;
    backgrounds = await backgroundRatio(cohortId);
   })
  it('calculates background ratio from background data', async () => {
    expect(backgrounds[0].percentage).toEqual('25.00');
    expect(backgrounds[1].percentage).toEqual('50.00');
  });
});
describe('testing students with no data', function() {
  let cohortId, backgrounds
  beforeEach( async () => { 
    await truncateTables()
    await createCohorts()
    await nodataStudents()
    cohortId = 1;
    backgrounds = await backgroundRatio(cohortId);
   })
  it('calculates background ratio from background data when one student has no background data', async () => {
    expect(backgrounds[1].type).toEqual('no data')
    expect(backgrounds[1].number).toEqual(1)
    expect(backgrounds[1].percentage).toEqual('50.00')
  });
})
