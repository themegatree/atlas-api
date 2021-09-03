const { Student } = require("../../models");
const getUniqueStudentData = require("./getUniqueStudentData");
const buildChallengeData = require("./buildChallengeData");
const buildAttributeData = require("./buildAttributeData");

const buildReportFor = async (cohortId) => {
  const cohortData = await Student.queryBy({CohortId: cohortId});
  const uniqueData = getUniqueStudentData(cohortData.rows);
  // transformData.build(cohortData.rows);
  console.log(uniqueData);

  const reportData = {};

  reportData["gender"] = buildAttributeData(uniqueData,"gender");
  reportData["background"] = buildAttributeData(uniqueData,"background");
  reportData["challenges"] = buildChallengeData(cohortData.rows,"challenge"); 

  return reportData;
};

module.exports = buildReportFor;