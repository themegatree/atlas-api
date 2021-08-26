const dataPromises = [
  require("./backgroundRatio")(),
  require("./genderRatio")(),
  require('./challengeRatio')(),
  require('./countCohorts')(),
  require('./countStudents')()
]

class Dashboard {
    constructor() {
        this.data = {}
    }

    async create() {
      await Promise.all(dataPromises)
        .then(values => {
          values.forEach(value => Object.assign(this.data, value))
        })
      console.log(this.data)
      return this.data
    }
}

module.exports = Dashboard;
