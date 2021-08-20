
const backgroundRatio = require('./backgroundRatio');
const genderRatio = require('./genderRatio')
const challengeRatio = require('./challengeRatio')
class Report {
  constructor() {
    this.completeReport = {};
  }
  
  async create(CohortId)  {
    await genderRatio(CohortId).then((Arr) => this.completeReport['gender'] = Arr)
    await backgroundRatio(CohortId).then((BGArr) => this.completeReport['background'] = BGArr)
    await challengeRatio(CohortId).then((ComArr) => this.completeReport['challengeCompletion'] = ComArr)
    return this.completeReport
  }

}
module.exports = Report;

