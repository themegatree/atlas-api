const { Student, ModuleChallenge } = require('../../models');

const challengeRatio = async (CohortId) => {
    totalStudentsQuery = await Student.findAndCountAll({
        raw: true,
        where :{
          CohortId:CohortId
        }
      })
      
  const studentIdList = totalStudentsQuery.rows.map(row => row.id)
  console.log("studentlist")
  console.log(studentIdList)
    // we need challengeName and we need studentscore.

    // to calculate completion we need total count of students - incomplete (value)

    //we just need to pass challengename to become a key in json

    //In the end we will have an Array of objects, with [{type:"bank", percentage : 50}]
    challengeQuery = await ModuleChallenge.findAndCountAll({
        raw: true,
        attributes: ['challengeName'],
        where :{
            StudentId: studentIdList
        }
      });
      const challengeList = challengeQuery
      console.log("challengeList")
      console.log(challengeList)

        

}
challengeRatio(1)