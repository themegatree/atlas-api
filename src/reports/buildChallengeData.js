const constants = require("../../constants");

function getChallengePercentage(cohortData, challenge){
  let successfulCount = 0;
  let totalCount = 0;
  let percentage = 0;
  cohortData.forEach(Data => {
    if (Data["ModuleChallenges.challengeName"] === challenge && Data["ModuleChallenges.studentScore"] !== "incomplete") {
      successfulCount += 1;
    }
    if (Data["ModuleChallenges.challengeName"] === challenge ){
      totalCount += 1;
    }
  }
  );
  if(totalCount === 0){
    percentage = 0;
  }else{
    percentage = Math.round(100*successfulCount/totalCount).toFixed(2);
  }
  return percentage; 
}

function buildChallengeData(cohortData,key) {
  const attributes = Object.values(constants[key]);
  const data = [];
  attributes.forEach(value => {
    const obj = {};
    obj["type"] = value;
    obj["percentage"] =  getChallengePercentage(cohortData, value);
    data.push(obj);
  }
  );
  return data;
}

module.exports = buildChallengeData;

