const { Student } = require('../../models') 

const totalStudents = async () => {
    const studentQuery = await Student.count({})
    return studentQuery
}

module.exports = totalStudents