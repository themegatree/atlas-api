const { Student } = require('../models')

const createStudent = async () => {
  console.log('creating student')
  await Student.create({
    firstName: 'Zara',
    lastName: 'Marshall',
    githubUsername: 'zaramgit',
    email: 'zaram@email.com'
  })
  await Student.create({
    firstName: 'Jeff',
    lastName: 'Jefferson',
    githubUsername: 'jjgit',
    email: 'jeff@email.com'
  })
  await Student.create({
    firstName: 'Alice',
    lastName: 'Williams',
    githubUsername: 'alicewilliamsgit',
    email: 'awilliams@email.com'
  })
  await Student.create({
    firstName: 'Clive',
    lastName: 'Smith',
    githubUsername: 'csmithgit',
    email: 'clivesmith@email.com'
  })
}

module.exports = createStudent
