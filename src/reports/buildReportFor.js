const { Student } = require("../../models");
const getUniqueStudentData = require("./getUniqueStudentData");
const buildChallengeData = require("./buildChallengeData");
const buildAttributeData = require("./buildAttributeData");

const buildReportFor = async (cohortId) => {
  const cohortData = await Student.queryBy({CohortId: cohortId});
  const uniqueData = getUniqueStudentData(cohortData.rows);

  const reportData = {};

  reportData["cohortName"] = uniqueData[0]["Cohort.name"];
  reportData["cohortSize"] = uniqueData.length;
  reportData["gender"] = buildAttributeData(uniqueData,"gender");
  reportData["background"] = buildAttributeData(uniqueData,"background");
  reportData["challenges"] = buildChallengeData(cohortData.rows,"challenge"); 

  console.log(reportData);
  return reportData;
};

module.exports = buildReportFor;