
const backgroundRatio = require('./backgroundRatio');
const genderRatio = require('./genderRatio')
const challengeRatio = require('./challengeRatio')
class Report {
  constructor() {
    this.reportObj = {report: {}};
  }
  
  async create(CohortId)  {

    await genderRatio(CohortId).then((Arr) => this.reportObj.report['gender'] = Arr)
    await backgroundRatio(CohortId).then((BGArr) => this.reportObj.report['background'] = BGArr)
    // await challengeRatio(CohortId).then((CompArr) => this.reportObj.report['challengeCompletion'] = ComArr)

    return this.reportObj
  }

}

module.exports = Report;