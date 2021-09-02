const { Student } = require("../../models");
const TransformData = require("./transformData");

// Key - Function Pair
// Psuedocode 

// const funcs = {
//   challengeName: makeJSON(challengeName,'number')
//   studentScore:  makeJSON(challengeName,'number')
//   gender:  makeJSON(challengeName,'number','percentage')
//   background: makeJSON(challengeName,'number','percentage')
// }

class ReportRefactored {

  constructor() {
    this.data = {};
  }
    
  async build(cohortId){
    const cohortData = await Student.queryBy({CohortId: cohortId});
    const transformData = new TransformData();
    transformData.build(cohortData.rows);

    //Do calculation
    
    //console.log(Object.keys(transformData));
    // Object.keys(transformData).forEach( key => {
      
    //   // Call a function to make each part of the data object 
    //   // set the key value pair in the data object 
    // }
    //);
    
  }
}


module.exports = ReportRefactored;