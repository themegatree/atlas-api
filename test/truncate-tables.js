const db = require('../models')

const truncateTables = () => {
  console.log('truncating tables')
  db.Cohort.destroy({ truncate: true, cascade: true })
  db.Student.destroy({ truncate: true, cascade: true })
}

module.exports = truncateTables
