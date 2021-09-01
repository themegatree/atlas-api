const { SelfAssessment, Student, ModuleChallenge, UploadHistory } = require("../../models");
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
    this.result = {
      errors: [],
      status: "pending"
    };
  }

  async process(csvFile) {
    this.data = this.fileConvertor(csvFile);
    const headerCheck = headerChecker(this.headers);
    
    if (!headerCheck.validFile) {
      this.result.errors.push(headerCheck.errors);
      this.result.status = "failure";
      await this.setHistory();
      return this.result;
    }

    this.data.map((dataObject, i) => dataObject.counter = i + 1);
    this.table = this.dbCheck(headerCheck.fileType);
    this.history = headerCheck.fileType;
    const checkData = new this.table.class();
    this.result.status = "success";
    this.result.errors = await checkData.check(this.data);
    return await this.addToDatabase();
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

  dbCheck(fileType) {
    const assessmentClass = fileTypes[fileType];
    if (assessmentClass === undefined) {
      return "invalid table selected";
    } else return assessmentClass;
  }

  async addToDatabase () {
    if (this.result.errors.length === 0) {
      await this.table.model.bulkCreate(this.data);
      this.result.status = "success";
      console.log(`erros at addtodatabase for success: ${this.result.errors}`);
      await this.setHistory();
    } else {
      this.result.status = "failure";
      console.log(`erros at addtodatabase for failure: ${this.result.errors}`);
      await this.setHistory();
    }
    return this.result;
  }

  async setHistory(){
    await UploadHistory.create({
      uploadType: this.history,
      status: this.result.status,
      errors: this.result.errors.join()
    });
  }
}

module.exports = FileUploader;
