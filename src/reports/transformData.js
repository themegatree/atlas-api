class TransformData {
  constructor() {
    this.gender = [];
    this.background = [];
  };

  selectByKey(data, key) {
    const values = data.map(obj => obj[key]);
    return values;
  };

  // pickKeys (obj, keys) {
  // Object.keys(obj)
  // .filter(i => keys.includes(i))
  // .reduce((acc, key) => {
  //   acc[key] = obj[key];
  //   return acc;
  // }, {})
  // };

  // simplifyData (data, keys) {
  //   return data.map(obj => this.pickKeys(obj,keys));
  // }

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
    const uniqueData = this.getUnique(cohortData);
    this.gender = this.selectByKey(uniqueData,"gender");
    this.background = this.selectByKey(uniqueData,"background");
  
  };

}
module.exports = TransformData;
