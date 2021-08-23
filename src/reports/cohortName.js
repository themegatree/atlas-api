const { Cohort } = require('../../models');
const cohortName = async (cohortId) => {
  cohort = await Cohort.findOne({
    raw: true,
    where :{
      id : cohortId
    }
  });
  const name = cohort.name
  return name;
};

module.exports = cohortName;