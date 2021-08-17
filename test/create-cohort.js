const { Cohort } = require('../models')

const createCohort = async () => {
  console.log('creating cohort')
  await Cohort.create({
    name: 'test cohort'
  })
}

module.exports = createCohort
