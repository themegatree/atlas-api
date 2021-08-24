const { Student, ModuleChallenge } = require('../../models')

const challengeRatio = async () => {
    const challengeQuery = await ModuleChallenge.findAndCountAll({
        raw: true,
        attributes: ['challengeName', 'studentScore'],
    })
    console.log(challengeQuery)

    const challengeList = challengeQuery.rows.map(row => row.challengeName)
    console.log(challengeList)

    const uniqueChallenges = challengeList.filter((challenge, index) => {
        return index === challengeList.indexOf(challenge)
    })
    console.log(uniqueChallenges)

    const challengeArr = []
    uniqueChallenges.forEach((challenge) => {
        challengeArr.push({type: challenge, percentage: 0})
    })
    console.log(challengeArr)

    
}

challengeRatio()

module.exports = challengeRatio