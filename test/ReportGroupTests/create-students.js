const { Student } = require("../../models");
const constants = require("../../constants");
const createStudents = async () => {
  console.log("creating student");
  await Student.bulkCreate( [{
    id:1,
    firstName: "Dummy1",
    lastName: "Student",
    githubUsername: "dummy-student1",
    email: "dummy1@student.com",
    gender: constants.gender.male,
    createdAt: new Date("2021-01-08"),
    updatedAt: new Date("2021-01-08"),
    background: constants.background.white,
    CohortId: 1
  }, 
  {
    id:2,
    firstName: "Dummy2",
    lastName: "Student",
    githubUsername: "dummy-student2",
    email: "dummy2@student.com",
    gender: constants.gender.female,
    createdAt: new Date("2021-01-08"),
    updatedAt: new Date("2021-01-08"),
    background: constants.background.black,
    CohortId: 1
  },
  {
    id:3,
    firstName: "Dummy3",
    lastName: "Student",
    githubUsername: "dummy-student3",
    email: "dummy3@student.com",
    gender: constants.gender.female,
    createdAt: new Date("2021-01-08"),
    updatedAt: new Date("2021-01-08"),
    background: constants.background.black,
    CohortId: 1
  },
  {
    id:4,
    firstName: "Dummy4",
    lastName: "Student",
    githubUsername: "dummy-student4",
    email: "dummy4@student.com",
    gender: constants.gender.female,
    createdAt: new Date("2021-01-08"),
    updatedAt: new Date("2021-01-08"),
    background: constants.background.other,
    CohortId: 1
  },
  {
    id:5,
    firstName: "Dummy5",
    lastName: "Student",
    githubUsername: "dummy-student4",
    email: "dummy4@student.com",
    gender: constants.gender.female,
    createdAt: new Date("2021-01-08"),
    updatedAt: new Date("2021-01-08"),
    background: constants.background.other,
    CohortId: 2
  }]);
};

module.exports = createStudents;
