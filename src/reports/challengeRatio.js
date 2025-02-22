const { Student, ModuleChallenge } = require("../../models");

const challengeRatio = async (cohortId) => {
  const totalStudentsQuery = await Student.findAndCountAll({
    raw: true,
    where :{
      CohortId: cohortId
    }
  });
  const studentIdList = totalStudentsQuery.rows.map(row => row.id);
  const challengeQuery = await ModuleChallenge.findAndCountAll({
    raw: true,
    attributes: ["challengeName", "studentScore"],
    where :{
      StudentId: studentIdList
    }
  });
  let challengeRows = challengeQuery.rows;
  challengeRows =  challengeRows.map(row => (row.studentScore === null) ? {challengeName: row.challengeName, studentScore : "incomplete"} : row);
  const challengeList = challengeQuery.rows.map(row => row.challengeName );
  const uniqueChallenges = challengeList.filter((challenge, index) => {
    return challengeList.indexOf(challenge) === index;
  });
  const challengeArr = [];
  uniqueChallenges.forEach((challenge,index) => {challengeArr[index] = {type: challenge, percentage: 0}; });
  for (let i=0; i< uniqueChallenges.length;i++){
    const currentChallenge = uniqueChallenges[i];
    const currentChallengeTotal = challengeRows.filter(row => row.challengeName === currentChallenge);
    const currentChallengeComplete = currentChallengeTotal.filter(row => row.studentScore != "incomplete");
    challengeArr[i].percentage = (100*currentChallengeComplete.length/currentChallengeTotal.length).toFixed(2);
  }
  return challengeArr;
};

module.exports = challengeRatio;
