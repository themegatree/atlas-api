const { Student, ModuleChallenge } = require('../../models');

const challengeRatio = async (CohortId) => {
    totalStudentsQuery = await Student.findAndCountAll({
        raw: true,
        where :{
          CohortId:CohortId
        }
      })
      
  const studentIdList = totalStudentsQuery.rows.map(row => row.id)
    challengeQuery = await ModuleChallenge.findAndCountAll({
        raw: true,
        attributes: ['challengeName', 'studentScore'],
        where :{
            StudentId: studentIdList
        }
      });
    
      const challengeRows = challengeQuery.rows
      const challengeList = challengeQuery.rows.map(row => row.challengeName )

      const uniqueChallenges = challengeList.filter((challenge, index) => {
        return challengeList.indexOf(challenge) === index;
      });

      const challengeArr = [];
      uniqueChallenges.forEach((challenge,index) => {challengeArr[index] = {type: challenge, percentage: 0} });

      for (let i=0; i< uniqueChallenges.length;i++){
        currentChallenge = uniqueChallenges[i]

        currentChallengeTotal = challengeRows.filter(row => row.challengeName === currentChallenge)
        currentChallengeComplete = currentChallengeTotal.filter(row => row.studentScore != 'incomplete')
        challengeArr[i].percentage = (100*currentChallengeComplete.length/currentChallengeTotal.length).toFixed(2)
      }

      return challengeArr
  
}

module.exports = challengeRatio