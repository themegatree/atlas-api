const { checkArraysAreEqual } = require('./utility.js')

const correctHeaders = {
  selfAssessment: ['StudentId', 'confidenceScore', 'overallScore', 'studentReason', 'studentFeedback', 'dueDate', 'submissionDate'],
  moduleChallenge: ['StudentId', 'challengeName', 'language', 'studentScore', 'coachScore', 'dueDate', 'submissionDate'],
  student: ['firstName', 'lastName', 'githubUsername', 'email', 'gender', 'background', 'CohortId']
}
const headerCheck = { 
  validFile: true,
  errors: ''
}

module.exports = function headerChecker (headers, table) {
  
  if (checkArraysAreEqual(headers, correctHeaders[table])) return headerCheck
  else { 
  headerCheck.validFile = false
  failedHeaderCheck(headers)
  return headerCheck
  }
}

function failedHeaderCheck (headers) {
   if (checkArraysAreEqual(headers, correctHeaders.moduleChallenge)) {
       headerCheck.errors = "Looks like you've tried to upload a module challenge"
   } 
   else if (checkArraysAreEqual(headers, correctHeaders.student)) { 
       headerCheck.errors = "Looks like you've tried to upload students"
   }
   else if (checkArraysAreEqual(headers, correctHeaders.selfAssessment)) { 
       headerCheck.errors = "Looks like you've tried to upload a self assessment"
   } 
   else {
       headerCheck.errors = `Headers: [${headers}] does not match any valid headers`
   }
}
