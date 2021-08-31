require('dotenv').config();

const truncateTables = require('../../../test/ReportGroupTests/truncate-tables') 
const createCohorts = require('../../../test/ReportGroupTests/create-cohorts')
const createStudents = require('../../../test/ReportGroupTests/create-students')
const createModuleChallenges = require('../../../test/ReportGroupTests/create-module-challenges')

const TransformData = require('../../../src/reports/transformData')

describe('Transform raw query data', () => {

  let transformData
  let cohortId 

  beforeEach( async () => {
      await truncateTables()
      await createCohorts()
      await createStudents()
      await createModuleChallenges()
      cohortId = 1;
      transformData = new TransformData()
  })

  it('can count number of unique student ids', async () => {
    const transformedData = await transformData.build(cohortId);
    expect(transformedData).toEqual([1,2,3,4])
  });

  fit('get unique student entries', async () => {
    const transformedData = await transformData.build(cohortId);
    console.log(transformedData);
    
    expect(transformData.uniqueData.length).toEqual(4)
    expect(transformData.uniqueData.map(student => student.id)).toEqual([1,2,3,4])
  })
  
});

// 1 - count number of students
// const total = backgroundQuery.count 

//2 - Put background/gender into array
// const backgrounds = backgroundQuery.rows.map(row => row.background)

// const backgroundObj = [];
// const uniquebackgrounds = backgrounds.filter((background, index) => {
//   return backgrounds.indexOf(background) === index;
// });

// const backgroundArr = [];
// uniquebackgrounds.forEach((background,index) => {backgroundArr[index] = {type: background, number: 0, percentage: 0} });
