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
    this.errors = [];
    this.status = "Success";
  }

  async process(csvFile) {
    this.data = this.fileConvertor(csvFile);
    const headerCheck = headerChecker(this.headers);
    
    if (!headerCheck.validFile) {
      this.errors.push(headerCheck.errors);
      this.status = "Failure";
      await this.setHistory();
      return this.errors;
    }

    this.data.map((dataObject, i) => dataObject.counter = i + 1);
    this.table = this.dbCheck(headerCheck.fileType);
    this.history = headerCheck.fileType;
    const checkData = new this.table.class();
    this.errors = await checkData.check(this.data);

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
    if (this.errors.length === 0) {
      await this.table.model.bulkCreate(this.data);
      this.status = "Success";
      await this.setHistory();
      return ["Updated the database successfully."];
    } else {
      this.status = "Failure";
      await this.setHistory();
      return this.errors;
    }
  }

  async setHistory(){
    await UploadHistory.create({
      uploadType: this.history,
      status: this.status,
      errors: this.errors.join()
    });
  }
}

module.exports = FileUploader;
