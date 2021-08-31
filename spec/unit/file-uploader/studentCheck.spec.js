const StudentChecker = require('../../../src/fileUpload/students.js')

describe('Student data check ', () => {
  let StudentMockData = {}
  beforeEach(() => {
    StudentMockData =
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
  })
  it('Checks cohortCheck works with no errors', async () => {
    const studentChecker = new StudentChecker()
    await studentChecker.cohortCheck([1, 2], StudentMockData)
    expect(studentChecker.errors).toEqual([])
  })
  it('Checks cohortCheck works with errors', async () => {
    const studentChecker = new StudentChecker()
    await studentChecker.cohortCheck([6, 7], StudentMockData)
    expect(studentChecker.errors).toEqual(['Cohort id: 1 does not exist, on line 1'])
  })
  it('Checks email address', () => {
    const studentChecker = new StudentChecker()
    const emailMockArray = ["UniqueEmaiAddress"]
    studentChecker.validateEmail(StudentMockData, emailMockArray)
    expect(studentChecker.errors).toEqual([])
  })
  it('Checks email address fails', async () => {
    const studentChecker = new StudentChecker()
    const emailMockArray = ["TestEmail@test.com"]
    StudentMockData.email = 'TestEmail@test.com'
    studentChecker.validateEmail(StudentMockData, emailMockArray)
    expect(studentChecker.errors).toEqual(['Email: TestEmail@test.com already exists on line 1'])
  })
  it('Checks email address fails with invalid address', () => {
    const studentChecker = new StudentChecker()
    const emailMockArray = ["notAnEmail"]
    StudentMockData.email = 'notanemail'
    studentChecker.validateEmail(StudentMockData, emailMockArray)
    expect(studentChecker.errors).toEqual(['Email: notanemail is invalid on line 1'])
  })
  it('Checks background check comes back with no errors', () => {
    const studentChecker = new StudentChecker()
    studentChecker.backgroundCheck(StudentMockData)
    expect(studentChecker.errors).toEqual([])
  })
  it('Checks background check comes back with errors', () => {
    const studentChecker = new StudentChecker()
    StudentMockData.background = 'Green'
    studentChecker.backgroundCheck(StudentMockData)
    expect(studentChecker.errors).toEqual(['You have entered an invalid or not yet included background: Green on line 1'])
  })
  it('Checks genderCheck passes with no errors', () => {
    const studentChecker = new StudentChecker()
    studentChecker.genderCheck(StudentMockData)
    expect(studentChecker.errors).toEqual([])
  })
  it('Checks genderCheck fails with invalid background', () => {
    const studentChecker = new StudentChecker()
    StudentMockData.gender = 'Snake'
    studentChecker.genderCheck(StudentMockData)
    expect(studentChecker.errors).toEqual(['You have entered an invalid or not yet included gender: Snake on line 1'])
  })
})
