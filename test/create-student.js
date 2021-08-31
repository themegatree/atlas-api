const { Student } = require("../models");

const createStudent = async () => {
  console.log("creating students");
  await Student.bulkCreate([{
    firstName: "Zara",
    lastName: "Marshall",
    githubUsername: "zaramgit",
    email: "zaram@email.com"
  }, {
    firstName: "Jeff",
    lastName: "Jefferson",
    githubUsername: "jjgit",
    email: "jeff@email.com"
  }, {
    firstName: "Alice",
    lastName: "Williams",
    githubUsername: "alicewilliamsgit",
    email: "awilliams@email.com"
  }, {
    firstName: "Clive",
    lastName: "Smith",
    githubUsername: "csmithgit",
    email: "clivesmith@email.com"
  }]);
};

module.exports = createStudent;
