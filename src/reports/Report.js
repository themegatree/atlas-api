
const backgroundRatio = require('./backgroundRatio');
const genderRatio = require('./genderRatio')

class Report {
  constructor() {
    this.reportObj = {report: {}};
  }
  
  async create(CohortId)  {
    // const gendersArr = async () => { 
    // const Arr = await genderRatio(CohortId)
    // return Arr
    // }
    // const backgroundArr = async () =>{
    // const BGArr = await backgroundRatio(CohortId)
    // return BGArr
    // }


    await genderRatio(CohortId).then((Arr) => this.reportObj.report['gender'] = Arr)
    await backgroundRatio(CohortId).then((BGArr) => this.reportObj.report['background'] = BGArr)

    return this.reportObj
  }

}

const report = new Report()
report.create(1)
setTimeout(() => console.log(report.reportObj),500)





module.exports = Report;