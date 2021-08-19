
const backgroundRatio = require('./backgroundRatio');
const genderRatio = require('./genderRatio')

class Report {
  constructor() {
    this.reportObj = {report: {}};
  }
  
  async create(CohortId)  {

    await genderRatio(CohortId).then((Arr) => this.reportObj.report['gender'] = Arr)
    await backgroundRatio(CohortId).then((BGArr) => this.reportObj.report['background'] = BGArr)

    return this.reportObj
  }

}

module.exports = Report;