const {SelfAssessment, Student} = require('../models')
const dateCheck = require('./dateCheck')

class ModuleChallengeChecker{
    constructor() {
        this.errors = [];
    }

    async findAllStudents() {
		return await Student.findAll({
			attributes: ['id'],
			include: {
				all: true
			}
		})
	} 

    async check(data) {
        const students = await this.findAllStudents()

        let arr = [];

        students.forEach(student => { arr.push(student.id) })

        let counter = 0

        data.forEach(dataObject => {
            counter++
            if (!(arr.includes(parseInt(dataObject.StudentId)))) {
                this.errors.push(`Student id: ${dataObject.StudentId} does not exist, on line ${counter}`)
            }
            this.projectCheck(dataObject.challengeName, dataObject.language, counter)
            this.errors = this.errors.concat(dateCheck(dataObject.dueDate, dataObject.submissionDate, counter))
            this.scoreCheck(dataObject.studentScore, dataObject.coachScore, counter)
        })
        return this.errors
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
}

module.exports = ModuleChallengeChecker