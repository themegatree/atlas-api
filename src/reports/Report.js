
const backgroundRatio = require('./backgroundRatio');
const genderRatio = require('./genderRatio')
const challengeRatio = require('./challengeRatio')
class Report {
  constructor() {
    this.completeReport = {};
  }
  
  async create(CohortId)  {
    await genderRatio(CohortId).then((genderReport) => this.completeReport['gender'] = genderReport)
    await backgroundRatio(CohortId).then((backgroundReport) => this.completeReport['background'] = backgroundReport)
    await challengeRatio(CohortId).then((challengeReport) => this.completeReport['challengeCompletion'] = challengeReport)
    return this.completeReport
  }

}
module.exports = Report;

