const { ModuleChallenge } = require("../../models");
const createModuleChallenges = async () => {
  console.log("creating student");
  await ModuleChallenge.bulkCreate( [{
    StudentId: 1,
    challengeName: "bank",
    language: "node",
    studentScore: "complete",
    coachScore: "complete",
    dueDate: new Date("2021-01-08"),
    submissionDate: new Date("2021-01-08"),
    createdAt:new Date("2021-01-08"),
    updatedAt:new Date("2021-01-08")
  },
  {
    StudentId: 1,
    challengeName: "Chitter",
    language: "node",
    studentScore: "complete",
    coachScore: "complete",
    dueDate: new Date("2021-01-08"),
    submissionDate: new Date("2021-01-08"),
    createdAt:new Date("2021-01-08"),
    updatedAt:new Date("2021-01-08")
  },
  {
    StudentId: 2,
    challengeName: "bank",
    language: "node",
    studentScore: "complete",
    coachScore: "complete",
    dueDate: new Date("2021-01-08"),
    submissionDate: new Date("2021-01-08"),
    createdAt:new Date("2021-01-08"),
    updatedAt:new Date("2021-01-08")
  },
  {
    StudentId: 2,
    challengeName: "Chitter",
    language: "node",
    studentScore: "complete",
    coachScore: "complete",
    dueDate: new Date("2021-01-08"),
    submissionDate: new Date("2021-01-08"),
    createdAt:new Date("2021-01-08"),
    updatedAt:new Date("2021-01-08")
  },
  {
    StudentId: 3,
    challengeName: "bank",
    language: "node",
    studentScore: "complete",
    coachScore: "complete",
    dueDate: new Date("2021-01-08"),
    submissionDate: new Date("2021-01-08"),
    createdAt:new Date("2021-01-08"),
    updatedAt:new Date("2021-01-08")
  },
  {
    StudentId: 3,
    challengeName: "Chitter",
    language: "node",
    studentScore: "incomplete",
    coachScore: "complete",
    dueDate: new Date("2021-01-08"),
    submissionDate: new Date("2021-01-08"),
    createdAt:new Date("2021-01-08"),
    updatedAt:new Date("2021-01-08")
  }]
  );};

module.exports = createModuleChallenges;