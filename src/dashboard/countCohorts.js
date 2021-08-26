const { Cohort } = require('../../models')

const countCohorts = async () => {
    return {
      cohortsTotal: await Cohort.count()
    }
}

module.exports = countCohorts
