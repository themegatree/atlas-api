<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 672593a (created challenge JS object)
class TransformData {
  constructor() {
    this.gender = [];
    this.background = [];
<<<<<<< HEAD
  };
=======
    this.uniqueData = [];
  }
>>>>>>> 672593a (created challenge JS object)

  selectByKey(data, key) {
    const values = data.map(obj => obj[key]);
    return values;
<<<<<<< HEAD
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
=======
  }
>>>>>>> 672593a (created challenge JS object)

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
<<<<<<< HEAD
    this.gender = this.selectByKey(uniqueData,"gender");
    this.background = this.selectByKey(uniqueData,"background");
  
  };

}
module.exports = TransformData;
=======
class TransformData {
  constructor() {
    this.gender = [];
    this.background = [];
    this.uniqueData = [];
  };

  selectByKey(data, key) {
    const values = data.map(obj => obj[key]);
    return values;
  };

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
    this.uniqueData = uniqueData
    this.gender = this.selectByKey(uniqueData,"gender");
    this.background = this.selectByKey(uniqueData,"background");
  };

}
module.exports = TransformData;
>>>>>>> c148f0b (working on genderAndBackgroundPercentage.js)
=======
    this.uniqueData = uniqueData;
    this.gender = this.selectByKey(uniqueData,"gender");
    this.background = this.selectByKey(uniqueData,"background");
  }

}
module.exports = TransformData;
>>>>>>> 672593a (created challenge JS object)
