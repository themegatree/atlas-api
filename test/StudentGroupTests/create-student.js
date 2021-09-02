const { Student } = require("../../models");

const createStudent = async () => {
  console.log("creating students");
  await Student.bulkCreate([{
    id: 1,
    firstName: "Zara",
    lastName: "Marshall",
    githubUsername: "zaramgit",
    email: "zaram@email.com",
    gender: "Female",
    background: "Black"
  }, {
    id: 2,
    firstName: "Jeff",
    lastName: "Jefferson",
    githubUsername: "jjgit",
    email: "jeff@email.com",
    gender: "Male",
    background: "White"
  }, {
    id: 3,
    firstName: "Alice",
    lastName: "Williams",
    githubUsername: "alicewilliamsgit",
    email: "awilliams@email.com",
    gender: "Female",
    background: "Black"
  }, {
    id: 4,
    firstName: "Clive",
    lastName: "Smith",
    githubUsername: "csmithgit",
    email: "clivesmith@email.com",
    gender: "Female",
    background: "Black"
  }]);
};

module.exports = createStudent;
