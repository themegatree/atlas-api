<<<<<<< HEAD:test/create-student.js
const { Student } = require("../models");
=======
const { Student } = require("../../models");
>>>>>>> f4ef1d5 (linted student tests):test/StudentGroupTests/create-student.js

const createStudent = async () => {
  console.log("creating students");
  await Student.bulkCreate([{
    firstName: "Zara",
    lastName: "Marshall",
    githubUsername: "zaramgit",
<<<<<<< HEAD:test/create-student.js
    email: "zaram@email.com"
=======
    email: "zaram@email.com",
    gender: "Female",
    background: "Black"
>>>>>>> f4ef1d5 (linted student tests):test/StudentGroupTests/create-student.js
  }, {
    firstName: "Jeff",
    lastName: "Jefferson",
    githubUsername: "jjgit",
<<<<<<< HEAD:test/create-student.js
    email: "jeff@email.com"
=======
    email: "jeff@email.com",
    gender: "Male",
    background: "White"
>>>>>>> f4ef1d5 (linted student tests):test/StudentGroupTests/create-student.js
  }, {
    firstName: "Alice",
    lastName: "Williams",
    githubUsername: "alicewilliamsgit",
<<<<<<< HEAD:test/create-student.js
    email: "awilliams@email.com"
=======
    email: "awilliams@email.com",
    gender: "Female",
    background: "Black"
>>>>>>> f4ef1d5 (linted student tests):test/StudentGroupTests/create-student.js
  }, {
    firstName: "Clive",
    lastName: "Smith",
    githubUsername: "csmithgit",
<<<<<<< HEAD:test/create-student.js
    email: "clivesmith@email.com"
=======
    email: "clivesmith@email.com",
    gender: "Female",
    background: "Black"
>>>>>>> f4ef1d5 (linted student tests):test/StudentGroupTests/create-student.js
  }]);
};

module.exports = createStudent;
