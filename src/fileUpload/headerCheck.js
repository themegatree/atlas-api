const { checkArraysAreEqual } = require("./utility.js");

const correctHeaders = {
  selfAssessment: ["StudentId", "confidenceScore", "overallScore", "studentReason", "studentFeedback", "dueDate", "submissionDate"],
  moduleChallenge: ["StudentId", "challengeName", "language", "studentScore", "coachScore", "dueDate", "submissionDate"],
  student: ["firstName", "lastName", "githubUsername", "email", "gender", "background", "CohortId"]
};

module.exports = function headerChecker (headers, table) {
  const headerCheck = { 
    validFile: true,
    errors: ""
  };
  if (checkArraysAreEqual(headers, correctHeaders[table])){
    return headerCheck;
  }
  else { 
    headerCheck.validFile = false;
    headerCheck.errors = failedHeaderCheck(headers);
    return headerCheck;
  }
};

function failedHeaderCheck (headers) {
  if (checkArraysAreEqual(headers, correctHeaders.moduleChallenge)) {
    return "Looks like you've tried to upload a module challenge";
  } 
  else if (checkArraysAreEqual(headers, correctHeaders.student)) { 
    return "Looks like you've tried to upload students";
  }
  else if (checkArraysAreEqual(headers, correctHeaders.selfAssessment)) { 
    return "Looks like you've tried to upload a self assessment";
  } 
  else {
    return `Headers: [${headers}] does not match any valid headers`;
  }
}
