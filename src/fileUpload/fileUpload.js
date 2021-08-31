const { SelfAssessment, Student, ModuleChallenge } = require("../../models");
const SelfAssessmentChecker = require("./selfAssessment.js");
const ModuleChallengeChecker = require("./moduleChallenge.js");
const StudentChecker = require("./students.js");
const headerChecker = require("./headerCheck.js");

const fileTypes = {
  moduleChallenge: { model: ModuleChallenge, class: ModuleChallengeChecker },
  selfAssessment: { model:  SelfAssessment, class: SelfAssessmentChecker },
  student: { model: Student, class: StudentChecker }
};

class FileUploader {
  constructor() {
    this.table = "";
    this.history = "";  
    this.data = "";
    this.headers = ""; 
    this.errors = [];
  }

  async process(fileType, csvFile) {
    this.history = fileType;
    this.table = this.dbCheck(fileType);
    this.data = this.fileConvertor(csvFile);
    this.data.map((dataObject, i) => dataObject.counter = i + 1);
    const headerCheck = headerChecker(this.headers, fileType);
        
    if (!headerCheck.validFile) {
      this.errors.push(headerCheck.errors);
      return this.errors;
    }

    const checkData = new this.table.class();
    this.errors = await checkData.check(this.data);
        
    return await this.addToDatabase();
  }

  dbCheck(fileType) {
    const assessmentClass = fileTypes[fileType];
    if (assessmentClass === undefined) {
      return "invalid table selected";
    } else return assessmentClass;
  }

  fileConvertor(csvFile) {
    const csvData = csvFile.toString().split(/\r?\n/);
    if (csvData[csvData.length - 1] === "") {
      csvData.pop();
    }
    this.headers = csvData[0].split(",");
      
    const arrayObj = [];
    for (let i = 1; i < csvData.length; i++) {
      const obj = {};
      const properties = csvData[i].split(",");

      for (const header in this.headers) {
        obj[this.headers[header]] = properties[header];
      }
      arrayObj.push(obj);
    }
    return arrayObj;
  }   

  async addToDatabase () {
    if (this.errors.length === 0) {
      await this.table.model.bulkCreate(this.data);
      return ["Updated the database successfully."];
    } else {
      return this.errors;
    }
  }
}

module.exports = FileUploader;