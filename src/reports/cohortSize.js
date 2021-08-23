const { Student } = require('../../models');
const cohortSize = async (cohortId) => {
  cohort = await Student.findAndCountAll({
    raw: true,
    where :{
      CohortId : cohortId
    }
  });
  const total = cohort.count 
  return total;
};

module.exports = cohortSize;