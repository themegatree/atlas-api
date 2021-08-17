const { Student } = require('../models')

const createStudent = async () => {
  console.log('creating student')
  await Student.create({
    firstName: 'test',
    lastName: 'student',
    githubUsername: 'teststudentgit',
    email: 'test@email.com'
  })
}

module.exports = createStudent
