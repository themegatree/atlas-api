
const backgroundRatio = require('./backgroundRatio');
const genderRatio = require('./genderRatio')
const gendersArr = async (CohortId) => {
const Arr = await backgroundRatio(CohortId)

}





class Report {
  constructor() {
    this.reportObj = {report: '' };
  }
  
  create(CohortId)  {
    const genderArrayTest = async () => {const genderArray = await gendersArr(CohortId)}
    this.reportObj += report['gender'] = genderArrayTest()
    
    return this.reportObj
  }

}

const report = new Report()
console.log(report.create(1))





module.exports = Report;