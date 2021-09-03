const backgroundRatio = require("./backgroundRatio");
const genderRatio = require("./genderRatio");
const challengeRatio = require("./challengeRatio");
const countCohorts = require("./countCohorts");
const countStudents = require("./countStudents");
const fileUploads = require("./fileUploads");

class Dashboard {
  constructor() {
    this.data = {};
  }

  async create() {
    await countStudents().then((studentCount) => this.data["studentTotal"] = studentCount);
    await countCohorts().then((cohortCount) => this.data["cohortsTotal"] = cohortCount);
    await genderRatio().then((genderData) => this.data["gender"] = genderData);
    await backgroundRatio().then((backgroundData) => this.data["background"] = backgroundData);
    await challengeRatio().then((challengeData) => this.data["challenges"] = challengeData);
    await fileUploads().then((uploadData) => this.data["fileUploads"] = uploadData);
        
    return this.data;
  }
}

module.exports = Dashboard;
