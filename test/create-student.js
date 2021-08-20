const { Student } = require('../models')

<<<<<<< HEAD
const createStudent = async () => {
  console.log('creating students')
  await Student.bulkCreate([{
    firstName: 'Zara',
    lastName: 'Marshall',
    githubUsername: 'zaramgit',
    email: 'zaram@email.com'
  }, {
    firstName: 'Jeff',
    lastName: 'Jefferson',
    githubUsername: 'jjgit',
    email: 'jeff@email.com'
  }, {
    firstName: 'Alice',
    lastName: 'Williams',
    githubUsername: 'alicewilliamsgit',
    email: 'awilliams@email.com'
  }, {
    firstName: 'Clive',
    lastName: 'Smith',
    githubUsername: 'csmithgit',
    email: 'clivesmith@email.com'
  }])
}

module.exports = createStudent
=======
const createStudents = async () => {
    console.log('creating student')
    await Student.bulkCreate( [{
        id:1,
        firstName: 'Dummy1',
        lastName: 'Student',
        githubUsername: 'dummy-student1',
        email: 'dummy1@student.com',
        gender: 'male',
        createdAt: new Date('2021-01-08'),
        updatedAt: new Date('2021-01-08'),
        background: 'White',
        CohortId: 1
    }, 
    {
        id:2,
        firstName: 'Dummy2',
        lastName: 'Student',
        githubUsername: 'dummy-student2',
        email: 'dummy2@student.com',
        gender: 'female',
        createdAt: new Date('2021-01-08'),
        updatedAt: new Date('2021-01-08'),
        background: 'Black',
        CohortId: 1
    },
    {
        id:3,
        firstName: 'Dummy3',
        lastName: 'Student',
        githubUsername: 'dummy-student3',
        email: 'dummy3@student.com',
        gender: 'female',
        createdAt: new Date('2021-01-08'),
        updatedAt: new Date('2021-01-08'),
        background: 'Black',
        CohortId: 1
    },
        {
        id:4,
        firstName: 'Dummy4',
        lastName: 'Student',
        githubUsername: 'dummy-student4',
        email: 'dummy4@student.com',
        gender: 'female',
        createdAt: new Date('2021-01-08'),
        updatedAt: new Date('2021-01-08'),
        background: 'Other',
        CohortId: 1
    },
    {
        id:5,
        firstName: 'Dummy5',
        lastName: 'Student',
        githubUsername: 'dummy-student4',
        email: 'dummy4@student.com',
        gender: 'female',
        createdAt: new Date('2021-01-08'),
        updatedAt: new Date('2021-01-08'),
        background: 'Other',
        CohortId: 2
    }])
}

module.exports = createStudents
>>>>>>> 4ad3001 (added tests and fixed relating bugs)
