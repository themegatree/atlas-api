const { Cohort } = require('../models')

const createCohort = async () => {
  console.log('creating cohort')
  await Cohort.create({
    name: 'A test',
    startDate: '2021-01-12'
  })
    await Cohort.create({
    name: 'B test',
    startDate: '2021-02-12'
  })
    await Cohort.create({
    name: 'C test',
    startDate: '2021-03-12'
  })
}

module.exports = createCohort
