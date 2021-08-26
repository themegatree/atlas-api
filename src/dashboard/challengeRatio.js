const { ModuleChallenge } = require("../../models");

const challengeRatio = async () => {
  const challengeQuery = await ModuleChallenge.findAndCountAll({
    raw: true,
    attributes: ["challengeName", "studentScore"],
  });

  const challengeList = challengeQuery.rows.map(row => row.challengeName);
  const uniqueChallenges = challengeList.filter((challenge, index) => {
    return index === challengeList.indexOf(challenge);
  });
  const challengeArr = [];

  uniqueChallenges.forEach((challenge) => {
    challengeArr.push({type: challenge, percentage: 0});
  });

  challengeArr.forEach(challenge => {
    const currentChallenge = challenge.type;
    const totalChallenge = challengeList.filter(challenge => challenge === currentChallenge);
    const filteredQuery = challengeQuery.rows.filter(row => row.challengeName === currentChallenge);
    const challengeComplete = filteredQuery.filter(challenge => challenge.studentScore !== "incomplete");
    challenge.percentage = (challengeComplete.length / totalChallenge.length * 100).toFixed(2).toString();
  });

  return challengeArr;
};

module.exports = challengeRatio;