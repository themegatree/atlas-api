const Query = require('./query');
const cohortId = 1;

const queryClass = new Query();

class TransformData {

  constructor(rawData = []) {
    this.rawData = rawData;
    this.students = [];
  }

  static async init (cohortId) {
    rawData = await queryClass.getQuery(cohortId)
    return new TransformData(rawData);
  }
  

  getUniqueStudents() {
    console.log(this.rawData)
  }


}

transformData = new TransformData(1);
transformData.init().then(data => console.log(data));
//transformData.getUniqueStudents()

module.exports = TransformData;

// transformData.count -> 2
// transformData.challenges -> ['Chitter', 'Bank']
