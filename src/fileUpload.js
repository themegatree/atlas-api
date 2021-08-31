const { SelfAssessment, Student, ModuleChallenge } = require("../models");
const SelfAssessmentChecker = require("./selfAssessment.js");
const ModuleChallengeChecker = require("./moduleChallenge.js");

class FileUploader {
  constructor (table, csvFile) {
    this.errors = [];
    this.validFile = true;
    this.table = this.dbCheck(table);
    this.data = this.fileConvertor(csvFile);
    this.history = table;
  }


  checkArraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; 
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false; 
    }
    return true;
  }

  headerChecker(headers) {
    const headersForSelfAssessment = ["StudentId", "confidenceScore", "overallScore", "studentReason", "studentFeedback", "dueDate", "submissionDate"];
    const headersForModuleChallenge = ["StudentId", "challengeName", "language", "studentScore", "coachScore", "dueDate", "submissionDate"];
	
    if (this.table === SelfAssessment) {
      if (this.checkArraysAreEqual(headers, headersForSelfAssessment)) { this.validFile = true; }
      else if (this.checkArraysAreEqual(headers, headersForModuleChallenge)) { this.errors = ["Looks like you've tried to upload a module challenge"]; this.validFile = false; }
      else { this.errors.push(`Headers: [${headers}] do not match Headers for Self Assessment: [${headersForSelfAssessment}]`); this.validFile = false; }
    }
    else if (this.table === ModuleChallenge) {
      if (this.checkArraysAreEqual(headers, headersForModuleChallenge)) { this.validFile = true; }
      else if (this.checkArraysAreEqual(headers, headersForSelfAssessment)) { this.errors = ["Looks like you've tried to upload a self assessment"]; this.validFile = false; }
      else { 
        this.errors.push(`Headers: [${headers}] do not match Headers for Module Challenge: [${headersForModuleChallenge}]`); 
        this.validFile = false;
      }
    }

  }

  fileConvertor (csvFile) {
    const csvData = csvFile.toString().split(/\r?\n/);
    if (csvData[csvData.length - 1] === "") {
      csvData.pop();
    }
    const headers = csvData[0].split(",");
    this.headerChecker(headers);
    const arrayObj = [];
    for (let i = 1; i < csvData.length; i++) {
      const obj = {};
      const properties = csvData[i].split(",");

      for (const header in headers) {
        obj[headers[header]] = properties[header];
      }
      arrayObj.push(obj);
    }
    return arrayObj;
  }

  dbCheck (table) {
    const tables = {
      moduleChallenge: ModuleChallenge,
      selfAssessment: SelfAssessment,
      students: Student
    };
    const assessmentClass = tables[table];
    if (assessmentClass === undefined) {
      return "invalid table selected";
    } else return assessmentClass;
  }

  async dataChecks () {
    if (this.table === ModuleChallenge) {
      const moduleCheck = new ModuleChallengeChecker();
      this.errors = await moduleCheck.check(this.data);
    } else if (this.table === SelfAssessment) {
      const learningChecker = new SelfAssessmentChecker();
      this.errors = await learningChecker.check(this.data);
    }
  }

  async addToDatabase () {
    if (this.errors.length === 0) {
      await this.table.bulkCreate(this.data, {
        returning: true
      });
      return ["Updated the database successfully."];
    } else {
      return this.errors;
    }
  }
}

module.exports = FileUploader;
