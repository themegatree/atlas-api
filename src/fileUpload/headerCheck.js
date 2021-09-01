const { checkArraysAreEqual } = require("./utility.js");
const correctHeaders = {
  selfAssessment: ["StudentId", "confidenceScore", "overallScore", "studentReason", "studentFeedback", "dueDate", "submissionDate"],
  moduleChallenge: ["StudentId", "challengeName", "language", "studentScore", "coachScore", "dueDate", "submissionDate"],
  student: ["firstName", "lastName", "githubUsername", "email", "gender", "background", "CohortId"]
};

const headerChecker = (headers) => {
  const headerCheck = { 
    validFile: true,
    errors: "",
    fileType: ""
  };
  const foundHeaders = Object.values(correctHeaders).find(correctSet => checkArraysAreEqual(correctSet, headers));
  const fileType = Object.keys(correctHeaders).find(fileType => checkArraysAreEqual(correctHeaders[fileType], foundHeaders));
  headerCheck.fileType = fileType || "";
  if (fileType === undefined) {
    headerCheck.validFile = false;
    headerCheck.errors = `Headers: [${headers}] does not match any valid headers`;
  }
  return headerCheck;
};


module.exports = headerChecker;