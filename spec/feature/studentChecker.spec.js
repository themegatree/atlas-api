const StudentChecker = require('../../src/fileUpload/students.js')

describe('feature tests for student checker', () => {
  let StudentMockData = []
  beforeEach(() => {
    StudentMockData = [
      {
        firstName: 'test',
        lastName: 'testerson',
        githubUsername: 'ttesterson123',
        email: 'TestTesterson@test.com',
        gender: 'Male',
        background: 'Black',
        CohortId: '1',
        counter: 1
      }
    ]
  })
  it('Works with no errors', async () => {
    const studentChecker = new StudentChecker()
    spyOn(studentChecker, 'isEmailUnique').and.returnValue(true)
    spyOn(studentChecker, 'findAllCohorts').and.returnValue([{ id: 1 }, { id: 2 }])
    await studentChecker.check(StudentMockData)
    expect(studentChecker.errors).toEqual([])
  })
  it('Works with errors', async () => {
    StudentMockData[0].email = 'fake@.com'
    StudentMockData[0].gender = 'mail'
    StudentMockData[0].background = 'test'
    const studentChecker = new StudentChecker()
    spyOn(studentChecker, 'isEmailUnique').and.returnValue(false)
    spyOn(studentChecker, 'findAllCohorts').and.returnValue([{ id: 6 }, { id: 7 }])
    await studentChecker.check(StudentMockData)
    expect(studentChecker.errors).toEqual([
      'Cohort id: 1 does not exist, on line 1',
      'You have entered an invalid or not yet included background: test on line 1',
      'You have entered an invalid or not yet included gender: mail on line 1',
      'Email: fake@.com is invalid on line 1',
      'Email: fake@.com already exists on line 1'
    ])
  })
})
