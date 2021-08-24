const { SelfAssessment, Student, ModuleChallenge } = require('../models')
const SelfAssessmentChecker = require('./selfAssessment.js')
const ModuleChallengeChecker = require('./moduleChallenge.js')
// const StudentChecker = require('./students.js')

class FileUploader {
  constructor (csvFile, table) {
    this.table = this.dbCheck(table)
    this.data = this.fileConvertor(csvFile)
    this.errors = []
    this.history = table
    this.status = ''
  }

  fileConvertor (csvFile) {
    const csvData = csvFile.toString().split(/\r?\n/)
    if (csvData[csvData.length - 1] === '') {
      csvData.pop()
    }
    const headers = csvData[0].split(',')
    const arrayObj = []
    for (let i = 1; i < csvData.length; i++) {
      const obj = {}
      const properties = csvData[i].split(',')

      for (const header in headers) {
        obj[headers[header]] = properties[header]
      }
      arrayObj.push(obj)
    }
    return arrayObj
  }

  dbCheck (table) {
    const tables = {
      moduleChallenge: ModuleChallenge,
      selfAssessment: SelfAssessment,
      students: Student
    }
    const assessmentClass = tables[table]
    if (assessmentClass === undefined) {
      return 'invalid table selected'
    } else return assessmentClass
  }

  async dataChecks () {
    if (this.table === ModuleChallenge) {
      const moduleCheck = new ModuleChallengeChecker()
      this.errors = await moduleCheck.check(this.data)
      return this.errors
    } else if (this.table === SelfAssessment) {
      const learningChecker = new SelfAssessmentChecker()
      this.errors = await learningChecker.check(this.data)
      return this.errors
    }
  }

  async addToDatabase () {
    if (this.errors.length === 0) {
      await this.table.bulkCreate(this.data, {
        returning: true
      })
      this.status = 'Success'
      return ['Updated the database successfully.']
    } else {
      this.status = 'Failure'
      return this.errors
    }
  }
}

module.exports = FileUploader
