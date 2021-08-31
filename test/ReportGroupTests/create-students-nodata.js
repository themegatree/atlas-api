const { Student } = require("../../models");

const nodataStudents = async () => {
  console.log("creating student");
  await Student.bulkCreate( [{
    id:6,
    firstName: "no gender",
    lastName: "Student",
    githubUsername: "dummy-student1",
    email: "dummy1@student.com",
    createdAt: new Date("2021-01-08"),
    updatedAt: new Date("2021-01-08"),
    background: "White",
    CohortId: 1
  },{
    id:7,
    firstName: "no background",
    lastName: "Student",
    githubUsername: "dummy-student1",
    email: "dummy1@student.com",
    createdAt: new Date("2021-01-08"),
    updatedAt: new Date("2021-01-08"),
    gender: "male",
    CohortId: 1
  }
  ]
  );};

module.exports = nodataStudents;
