const { Cohort } = require('../models')

const createCohort = async () => {
  console.log('creating cohort')
  await Cohort.create({
    name: 'A test',
    startDate: '12/01/2021'
  })
    await Cohort.create({
    name: 'B test',
    startDate: '12/02/2021'
  })
    await Cohort.create({
    name: 'C test',
    startDate: '12/03/2021'
  })
}

module.exports = createCohort
