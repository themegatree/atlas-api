const Query = require("./query");
const cohortId = 1;

const queryClass = new Query();

// async function createWebPage(url) {
//   const webPage = new WebPage(url);
//   await webPage.initialize();
//   return webPage;
// }


class TransformData {

  constructor() {
    this.transformedData = {}
    // this.studentIds = [];
    // this.uniqueStudents = [];
    // this.challengeName = [];
    // this.studentScore = [];
    this.gender = [];
    this.uniqueData = [];
  }

  async init (cohortId) {
    const rawData = await queryClass.getQuery(cohortId);
    return rawData.rows
  }
  
  getUniqueStudents(rawData) {
    const studentIds = rawData.map(student => student.id);
    const uniqueIds = studentIds.filter((data, index) => studentIds.indexOf(data) === index);
    return uniqueIds
  }

  selectByKey(rawData, key) {
    const values = rawData.map(data => data[key])

    return values
  }
  
  getUnique(rawData) {
    const uniqueData = [rawData[0]];
    rawData.forEach(data => {
        if (uniqueData[uniqueData.length - 1].id !== data.id) {
          uniqueData.push(data);
        }
      }
    )
    return uniqueData
  }

  // Method calls all other methods
  async build(cohortId) {
    const rawData = await this.init(cohortId)
    this.transformedData.challengeName = this.selectByKey(rawData,['ModuleChallenges.challengeName'])
    this.transformedData.studentScore = this.selectByKey(rawData,['ModuleChallenges.studentScore'])
    this.uniqueData = this.getUnique(rawData);
    //this.studentIds = this.getUniqueStudents(rawData);
    
    return this.transformedData;
  }

}

transformData = new TransformData()
transformData.build(1)

module.exports = TransformData;
