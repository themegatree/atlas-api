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
    this.studentIds = [];
  
    this.challengeName = [];
    this.studentScore = [];
    this.gender = [];
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
  
  correctGender(rawData) {
    
    const uniqueIds = rawData.filter((data, index) => rawData.indexOf(data.id) === index)
    console.log( uniqueIds)
    return uniqueIds
  }


  // Method calls all other methods
  async build(cohortId) {
    const rawData = await this.init(cohortId)
    this.challengeName = this.selectByKey(rawData,['ModuleChallenges.challengeName'])
    this.studentScore = this.selectByKey(rawData,['ModuleChallenges.studentScore'])
    this.gender = this.correctGender(rawData)
    this.studentIds = this.getUniqueStudents(rawData);
    
    return this.studentIds
  }

}


module.exports = TransformData;
