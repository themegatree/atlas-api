const { Cohort } = require("../../models");

const createCohort = async () => {
  console.log("creating cohort");
  await Cohort.create({
    id: 1,
    name: "A-Cohort",
    startDate: "2021-01-12",
    leadCoach: "Ed"
  });
  await Cohort.create({
    id: 2,
    name: "B-Cohort",
    startDate: "2021-02-12",
    leadCoach: "Lisa"
  });
  await Cohort.create({
    id: 3,
    name: "C-Cohort",
    startDate: "2021-03-12",
    leadCoach: "Sam"
  });
  await Cohort.create({
    id: 4,
    name: "D-Cohort",
    startDate: "2021-04-12",
    leadCoach: "Ben"
  });
};

module.exports = createCohort;
