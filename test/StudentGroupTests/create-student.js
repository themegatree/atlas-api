const { Student } = require("../../models");

const createStudent = async () => {
  console.log("creating students");
  await Student.bulkCreate([{
    firstName: "Zara",
    lastName: "Marshall",
    githubUsername: "zaramgit",
    email: "zaram@email.com",
    gender: "Female",
    background: "Black"
  }, {
    firstName: "Jeff",
    lastName: "Jefferson",
    githubUsername: "jjgit",
    email: "jeff@email.com",
    gender: "Male",
    background: "White"
  }, {
    firstName: "Alice",
    lastName: "Williams",
    githubUsername: "alicewilliamsgit",
    email: "awilliams@email.com",
    gender: "Female",
    background: "Black"
  }, {
    firstName: "Clive",
    lastName: "Smith",
    githubUsername: "csmithgit",
    email: "clivesmith@email.com",
    gender: "Female",
    background: "Black"
  }]);
};

module.exports = createStudent;
