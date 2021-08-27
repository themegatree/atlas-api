const {Student} = require("../models");
const dateCheck = require("./dateCheck.js");

class SelfAssessmentChecker {
  constructor () {
    this.errors = [];
  }

  async findAllStudents () {
    return await Student.findAll({
      attributes: ["id"],
      include: {
        all: true
      }
    });
  }

  async check (data) {
    const students = await this.findAllStudents()

    const arr = students.map(student => student.id)

    data.forEach(dataObject => {
      if (!arr.includes(parseInt(dataObject.StudentId))) {
        this.errors.push(`Student id: ${dataObject.StudentId} does not exist, on line ${dataObject.counter}`)
      }
      this.feedbackChecker(dataObject)
      this.learningScoreCheck(dataObject)
      this.errors = this.errors.concat(dateCheck(dataObject))
    })
    return this.errors
  }

  feedbackChecker (obj) {
    if (obj.studentReason.length > 255) {
      this.errors.push(`The studentReason on line ${obj.counter} exceeds character length 255.`)
    }
    if (obj.studentFeedback.length > 255) {
      this.errors.push(`The studentFeedback on line ${obj.counter} exceeds character length 255.`)
    }
  }

  learningScoreCheck (obj) {
    if (obj.confidenceScore < 1 || obj.confidenceScore > 5) {
      this.errors.push(
          `The score: ${obj.confidenceScore} on line ${obj.counter} does not exist or is not within the limits for confidence score.`
      )
    }
    if (obj.overallScore < 1 || obj.overallScore > 5) {
      this.errors.push(
        `The score: ${obj.overallScore} on line ${obj.counter} does not exist or is not within the limits for overall score.`
      )
    }
  }
}

module.exports = SelfAssessmentChecker;
