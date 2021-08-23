
const backgroundRatio = require('./backgroundRatio');
const genderRatio = require('./genderRatio')
const challengeRatio = require('./challengeRatio')
class Report {
  constructor() {
    this.completeReport = {};
  }
  async create(cohortId)  {
    await genderRatio(cohortId).then((genderReport) => this.completeReport['gender'] = genderReport)
    await backgroundRatio(cohortId).then((backgroundReport) => this.completeReport['background'] = backgroundReport)
    await challengeRatio(cohortId).then((challengeReport) => this.completeReport['challengeCompletion'] = challengeReport)
    return this.completeReport
  }
}
module.exports = Report;

