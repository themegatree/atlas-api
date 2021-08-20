
const backgroundRatio = require('./backgroundRatio');
const genderRatio = require('./genderRatio')
const challengeRatio = require('./challengeRatio')
class Report {
  constructor() {
    this.reportObj = {report: {}};
  }
  
  async createReport(CohortId)  {

    await genderRatio(CohortId).then((Arr) => this.reportObj.report['gender'] = Arr)
    await backgroundRatio(CohortId).then((BGArr) => this.reportObj.report['background'] = BGArr)
    await challengeRatio(CohortId).then((ComArr) => this.reportObj.report['challengeCompletion'] = ComArr)

    return this.reportObj
  }

}
const report = new Report()
result = report.createReport(1)
setTimeout(() => console.log(result) , 5000)
module.exports = Report;