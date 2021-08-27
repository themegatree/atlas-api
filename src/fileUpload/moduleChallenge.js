const { Student } = require('../../models')
const dateCheck = require('./dateCheck')

const scores = ['incomplete', 'complete', 'extended']
const challengeNames = ['Chitter', 'RPS', 'News Summary', 'Scrabble', 'Bank', 'Airport']
const languages = ['nodejs', 'javascript', 'java']


class ModuleChallengeChecker {
    constructor() {
    this.errors = []
      }

     async check(data) {
          
    const students = await this.findAllStudents()

    const arr = students.map(student => student.id)

    data.forEach(dataObject => {
      if (!(arr.includes(parseInt(dataObject.StudentId)))) {
        this.errors.push(`Student id: ${dataObject.StudentId} does not exist, on line ${dataObject.counter}`)
      }
      this.projectCheck(dataObject)
      this.errors = this.errors.concat(dateCheck(dataObject))
      this.scoreCheck(dataObject)
    })
    return this.errors
      }
    
    async findAllStudents() {
        return await Student.findAll({
            attributes: ['id'],
            include: {
                all: true
            }
        })
    }


  scoreCheck (obj) {
    if (!scores.includes(obj.studentScore)) {
      this.errors.push(`Student Score: ${obj.studentScore} is invalid, on line ${obj.counter}`)
    }
    if (!scores.includes(obj.coachScore)) {
      this.errors.push(`Coach Score: ${obj.coachScore} is invalid, on line ${obj.counter}`)
    }
  }

  projectCheck (obj) {
    if (!challengeNames.includes(obj.challengeName)) {
      this.errors.push(`You have entered an incorrect challenge name on line ${obj.counter}`)
    }
    if (!languages.includes(obj.language)) {
      this.errors.push(`You have entered an incorrect language on line ${obj.counter}`)
    }
  }
}

module.exports = ModuleChallengeChecker
