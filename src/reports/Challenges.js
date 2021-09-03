const constants = require("../../constants");

// For one challenge
function ChallengePercentageCalculator(cohortData, challenge){
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
    percentage = 100*(successfulCount/totalCount).toFixed(2);
  }
  return percentage; 
}
const challengeNames = Object.values(constants.challenge);
function getChallengePercentages(cohortData) {
  challengeNames.forEach(challenge => {ChallengePercentageCalculator(cohortData, challenge);
    console.log(challenge);
    console.log(ChallengePercentageCalculator(cohortData, challenge));
  }
  );
}

module.exports = getChallengePercentages;

