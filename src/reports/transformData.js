class TransformData {
  constructor() {
    this.challengeData = [];
    this.challengeName = [];
    this.studentScore = [];
    this.gender = [];
    this.background = [];
  };

  selectByKey(data, key) {
    const values = data.map(obj => obj[key]);
    return values;
  };

  pickKeys (obj, keys) {
  Object.keys(obj)
  .filter(i => keys.includes(i))
  .reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {})
  };

  simplifyData (data, keys) {
    return data.map(obj => this.pickKeys(obj,keys));
  }

  // selectByMultipleKeys(data, keys){
  

  //   const values = data.map(obj => {
  //     keys.mapobj[key]
      
  //   });
  //   return values;
  // }; 
  getUnique(cohortData) {
    const uniqueData = [cohortData[0]];
    cohortData.forEach(data => {
      if (uniqueData[uniqueData.length - 1].id !== data.id) {
        uniqueData.push(data);
      }
    }
    );
    return uniqueData;
  }
  build(cohortData) { 
    this.challengeName = this.selectByKey(cohortData,"ModuleChallenges.challengeName");
    console.log(this.challengeName);
    this.studentScore = this.selectByKey(cohortData,"ModuleChallenges.studentScore");
    const uniqueData = this.getUnique(cohortData);
    this.gender = this.selectByKey(uniqueData,"gender");
    console.log(this.gender);
    this.background = this.selectByKey(uniqueData,"background");
  };

}
module.exports = TransformData;
