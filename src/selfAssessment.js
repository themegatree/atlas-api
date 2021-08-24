const { SelfAssessment, Student } = require('../models');
const dateCheck = require('./dateCheck.js');

class SelfAssessmentChecker {
	constructor() {
		this.errors = [];
	}

	async check(data) {
		let counter = 0;
		const students = await Student.findAll({
            attributes: ['id'],
            include: {
                all: true
            }
        })

		let arr = [];

		students.forEach(student => { //what's this now? GW
			arr.push(student.id);
		});

		data.forEach(dataObject => {
			counter++;
			if (!arr.includes(parseInt(dataObject.StudentId))) {
				this.errors.push(`Student id: ${dataObject.StudentId} does not exist, on line ${counter}`);
			}
			this.learningScoreCheck(dataObject.confidenceScore, dataObject.overallScore, counter);
			this.errors = this.errors.concat(dateCheck(dataObject.dueDate, dataObject.submissionDate))
		});
		return this.errors;
	}

	learningScoreCheck(confidenceScore, overallScore, counter) {
		if (confidenceScore < 1 || confidenceScore > 5) {
			this.errors.push(
				`The score: ${confidenceScore} on line ${counter} does not exist or is not within the limits for confidence score.`
			);
		}
		if (overallScore < 1 || overallScore > 5) {
			this.errors.push(
				`The score: ${overallScore} on line ${counter} does not exist or is not within the limits for overall score.`
			);
		}
	}
}

module.exports = SelfAssessmentChecker;
