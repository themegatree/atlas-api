const { Cohort } = require('../../models') 

const totalCohorts = async () => {
    const cohortQuery = await Cohort.count({})
    return cohortQuery
}

module.exports = totalCohorts