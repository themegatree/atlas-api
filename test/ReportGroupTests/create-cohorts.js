const { Cohort } = require("../../models");

const createCohorts = async () => {
  console.log("creating cohort");
  await Cohort.create({
    id: 1,
    name: "Dummy Cohort 1",
    createdAt: new Date("2020-12-31"),
    updatedAt: new Date("2020-12-31")
  });

  await Cohort.create({
    id: 2,
    name: "Dummy Cohort 2",
    createdAt: new Date("2020-12-31"),
    updatedAt: new Date("2020-12-31")
  });

  await Cohort.create({
    id: 3,
    name: "Richard Cohort 2",
    createdAt: new Date("2020-12-31"),
    updatedAt: new Date("2020-12-31")
  });
};

module.exports = createCohorts;
