const { Cohort } = require("../../models"); 

const countCohorts = async () => {
  return await Cohort.count();
};

module.exports = countCohorts;
