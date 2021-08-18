
const backgroundRatio = require('./backgroundRatio');
const genderRatio = require('./genderRatio')

class Report {
  constructor() {
    this.reportObj = {report: {}};
  }
  
  create(CohortId)  {
    const gendersArr = async () => { 
    const Arr = await genderRatio()
    return Arr
    }
    const backgroundArr = async () =>{
    const BGArr = await backgroundRatio()
    return BGArr
    }
    gendersArr(1).then((Arr) => this.reportObj.report['gender'] = Arr)
    backgroundArr(1).then((BGArr) => this.reportObj.report['background'] = BGArr)

    return this.reportObj
  }

}

const report = new Report()
report.create(1)
setTimeout(() => console.log(report.reportObj),300)





module.exports = Report;