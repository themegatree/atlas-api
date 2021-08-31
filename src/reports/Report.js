
const backgroundRatio = require("./backgroundRatio");
const genderRatio = require("./genderRatio");
const challengeRatio = require("./challengeRatio");
const cohortSize = require("./cohortSize");
const cohortName = require("./cohortName");

class Report {
  constructor() {
    this.completeReport = {};
  }
  async create(cohortId)  {
    this.completeReport["cohortId"] = cohortId;
    await cohortSize(cohortId).then((cohortSize) => this.completeReport["cohortSize"] = cohortSize);
    await cohortName(cohortId).then((cohortName) => this.completeReport["cohortName"] = cohortName);
    await genderRatio(cohortId).then((genderReport) => this.completeReport["gender"] = genderReport);
    await backgroundRatio(cohortId).then((backgroundReport) => this.completeReport["background"] = backgroundReport);
    await challengeRatio(cohortId).then((challengeReport) => this.completeReport["challenges"] = challengeReport);
    return this.completeReport;
  }
}
module.exports = Report;

