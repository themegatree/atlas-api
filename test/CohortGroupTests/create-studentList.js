const { Student } = require("../../models");

const createStudentList = async () => {
  console.log("creating student");
  await Student.bulkCreate( [{
    id:1,
    firstName: "Chris",
    lastName: "Hemsworth",
    githubUsername: "Chemsworth",
    email: "chemsworth@atlas.com",
    gender: "male",
    background: "White",
    CohortId: 1
  }, 
  {
    id:2,
    firstName: "Michael",
    lastName: "Jordan",
    githubUsername: "MBJordan",
    email: "mikey_b@atlas.com",
    gender: "male",
    background: "Black",
    CohortId: 1
  },
  {
    id:3,
    firstName: "Angelina",
    lastName: "Jolie",
    githubUsername: "AJisCool",
    email: "angeliiiiiina@atlas.com",
    gender: "female",
    background: "White",
    CohortId: 1
  },
  {
    id:4,
    firstName: "Avan",
    lastName: "Jogia",
    githubUsername: "AJisCool2",
    email: "dummy4@atlas.com",
    gender: "male",
    background: "Other",
    CohortId: 1
  },
  {
    id:5,
    firstName: "Bridget",
    lastName: "Jones",
    githubUsername: "ThatsNotMyDiary",
    email: "bridget_123@atlas.com",
    gender: "female",
    background: "White",
    CohortId: 2
  },
  {
    id:6,
    firstName: "Tiffany",
    lastName: "Hadish",
    githubUsername: "Tiffy",
    email: "t.hadish@atlas.com",
    gender: "female",
    background: "Black",
    CohortId: 2
  },
  {
    id:7,
    firstName: "Jennifer",
    lastName: "Lopez",
    githubUsername: "JennyFromTheBlock",
    email: "J.Lo@atlas.com",
    gender: "female",
    background: "Other",
    CohortId: 3
  }
  ]);
};

module.exports = createStudentList;