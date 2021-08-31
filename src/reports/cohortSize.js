const { Student } = require("../../models");
const cohortSize = async (cohortId) => {
  const cohortStudents = await Student.findAndCountAll({
    raw: true,
    where :{
      CohortId : cohortId
    }
  });
  return cohortStudents.count; 
};

module.exports = cohortSize;