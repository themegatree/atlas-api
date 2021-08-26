const { Student } = require('../../models')

const countStudents = async () => {
    return {
      studentTotal: await Student.count()
    }
}

module.exports = countStudents
