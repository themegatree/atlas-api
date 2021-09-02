const constants = require("../../constants");

// For one challenge
function ChallengePercentageCalculator(cohortData, challenge){
  let SuccessfulCount = 0;
  cohortData.forEach(Data => {
    // console.log(Data["ModuleChallenges.challengeName"]) ;
    // console.log(Data["ModuleChallenges.challengeName"] === challenge);
    if (Data["ModuleChallenges.challengeName"] === challenge && Data["ModuleChallenges.studentScore"] !== "incomplete") {
      SuccessfulCount += 1;
    }
  }
  );
  //console.log(SuccessfulCount);
  return SuccessfulCount;
}

console.log(constants.challenge);
console.log(Object.values(constants.challenge))
const challengeNames = Object.values(constants.challenge);

// For all the challenges
function getChallengePercentages(cohortData) {
  challengeNames.forEach(challenge => {ChallengePercentageCalculator(cohortData, challenge);
    console.log(challenge);
    console.log(ChallengePercentageCalculator(cohortData, challenge));
  }
  );
}

module.exports = getChallengePercentages;