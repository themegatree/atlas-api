const { Cohort } = require("../../models");
const cohortName = async (cohortId) => {
  const cohort = await Cohort.findOne({
    raw: true,
    where :{
      id : cohortId
    }
  });
  return cohort.name;
};

module.exports = cohortName;
