const { SelfAssessment, Student, ModuleChallenge } = require('../models')
const SelfAssessmentChecker = require('./selfAssessment.js')
const ModuleChallengeChecker = require('./moduleChallenge.js')

class FileUploader {
  constructor (csvFile, table) {
    this.table = this.dbCheck(table)
    this.data = this.fileConvertor(csvFile)
    this.errors = []
    this.history = table
    this.validFile = true
  }

  headerChecker(headers) {
    const headersForSelfAssessment = ['StudentId', 'confidenceScore', 'overallScore', 'studentReason', 'studentFeedback', 'dueDate', 'submissionDate']
    const headersForModuleChallenge = ['StudentId', 'challengeName', 'language', 'studentScore', 'coachScore', 'dueDate', 'submissionDate']

    if (this.table === selfAssessment) {
      if (headers === headersForSelfAssessment) {this.validFile = true}
      else if (headers === headersForModuleChallenge) this.errors.push("Looks like you've tried to upload a module challenge")
      else this.errors.push(`Headers: ${headers} do not match Headers for Self Assessment: ${headersForSelfAssessment}`)
    }

    if (this.table === ModuleChallenge) {
      if (headers === headersForModuleChallenge) { this.validFile = true}
      else if (headers === headersForSelfAssessment) this.errors.push("Looks like you've tried to upload a self assessment")
      else this.errors.push(`Headers: ${headers} do not match Headers for Module Challenge: ${headersForModuleChallenge}`)
     }
  }

  fileConvertor (csvFile) {
    const csvData = csvFile.toString().split(/\r?\n/)
    if (csvData[csvData.length - 1] === '') {
      csvData.pop()
    }
    const headers = csvData[0].split(',')
    this.headerChecker(headers)
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
    } else if (this.table === SelfAssessment) {
      const learningChecker = new SelfAssessmentChecker()
      this.errors = await learningChecker.check(this.data)
    }
  }

  async addToDatabase () {
    if (this.errors.length === 0) {
      await this.table.bulkCreate(this.data, {
        returning: true
      })
      return ['Updated the database successfully.']
    } else {
      return this.errors
    }
  }
}

module.exports = FileUploader
