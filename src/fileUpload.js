const { SelfAssessment, Student, ModuleChallenge } = require('../models')

class FileUploader {
  constructor (csvFile, database) {
    this.database = this.dbCheck(database)
    this.data = this.fileConvertor(csvFile)
    this.errors = []
  }

  fileConvertor (csvFile) {
    const csvData = csvFile.toString().split(/\r?\n/)
    csvData[0].split(',')
    const headers = csvData[0].split(',')
    const arrayObj = []
    for (let i = 1; i < csvData.length - 2; i++) {
      const obj = {}
      const properties = csvData[i].split(',')

      for (const header in headers) {
        obj[headers[header]] = properties[header]
      }
      arrayObj.push(obj)
    }
    return arrayObj
  }

  dbCheck (database) {
    if (database === 'moduleChallenge') {
      return ModuleChallenge
    } else if (database === 'selfAssessment') {
      return SelfAssessment
    } else if (database === 'students') {
      return Student
    } else {
      return 'invalid database selected'
    }
  }

  async dataChecks () {
    if (this.database === ModuleChallenge) {
      await this.moduleDataCheck()
      return this.errors
    } else if (this.database === SelfAssessment) {
      await this.learningDataCheck()
      // return this.errors
    } else if (this.database === Student) {

    } else {

    }
  }

  async addToDatabase () {
    if(this.errors.length === 0){
        await this.database.bulkCreate(this.data,  {
          returning : true
        })
        return ["Updated the database successfully."]
    }
    else{
      return this.errors
    }
}

  async learningDataCheck () {
    let counter = 0
    const students = await Student.findAll({
      attributes: ['id']
    })

    this.data.forEach(dataObject => {
      counter++
      if (!students.includes(dataObject.StudentId)) {
        this.errors.push(`Student id: ${dataObject.StudentId} does not exist, on line ${counter}`)
      }

      this.learningScoreCheck(dataObject.confidenceScore, dataObject.overallScore, counter)
      this.dateCheck(dataObject.dueDate, dataObject.submissionDate)
    })
  }

  async moduleDataCheck () {
    const students = await Student.findAll({
      attributes: ['id']
    })

    let counter = 0

    this.data.forEach(dataObject => {
      counter++
      if (!students.includes(dataObject.StudentId)) this.errors.push(`Student id: ${dataObject.StudentId} does not exist, on line ${counter}`)
      this.projectCheck(dataObject.challengeName, dataObject.language, counter)
      this.dateCheck(dataObject.dueDate, dataObject.submissionDate, counter)
      this.scoreCheck(dataObject.studentScore, dataObject.coachScore, counter)
    })
    return this.errors
  }

  projectCheck (challenge, language, counter) {
    const challengeNames = ['Chitter', 'RPS', 'News Summary', 'Scrabble', 'Bank', 'Airport']
    const languages = ['nodejs', 'javascript', 'java']
    if (!challengeNames.includes(challenge)) {
      this.errors.push(`You have entered an incorrect challenge name on line ${counter}`)
    }
    if (!languages.includes(language)) {
      this.errors.push(`You have entered an incorrect language on line ${counter}`)
    }
  }

  scoreCheck (student, coach, counter) {
    const scores = ['incomplete', 'complete', 'extended']
    if (!scores.includes(student)) {
      this.errors.push(`Student Score: ${student} is invalid, on line ${counter}`)
    }
    if (!scores.includes(coach)) {
      this.errors.push(`Coach Score: ${coach} is invalid, on line ${counter}`)
    }
  }

  dateCheck (dueDate, submissionDate, counter) {
    const currentDate = Date.now()
    dueDate = new Date(dueDate)
    submissionDate = new Date(submissionDate)
    if (dueDate > currentDate) {
      this.errors.push(`Due date: ${dueDate} is invalid, on line ${counter}`)
    }
    if (submissionDate > currentDate) {
      this.errors.push(`Submission date: ${submissionDate} is invalid, on line ${counter}`)
    }
  }

  learningScoreCheck (confidenceScore, overallScore, counter) {
    if (confidenceScore < 0 > 5) {
      this.errors.push(`The score on line ${counter} does not exist or is not within the limits for confidence score.`)
    }
    if (overallScore < 0 > 5) {
      this.errors.push(`The score on line ${counter} does not exist or is not within the limits for overall score.`)
    }
  }
}

module.exports = FileUploader
