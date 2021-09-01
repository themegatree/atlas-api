const { Student, Cohort } = require("../../models");

const ethnicGroups = ["White", "Mixed or multiple ethnic groups", "Asian or Asian British", "Black","African", "Caribbean or Black British", "Other ethnic group", "Prefer not to say"];
const genders = ["Female", "Male", "Prefer not to say"];
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

class StudentChecker {
  constructor() {
    this.errors = [];
  }

  async check (data) {
    if (data.length > 51) {
      this.errors.push("Maximum number of students in file (50) exceeded");
      return this.errors;
    }
    const emailsObj = await this.findAllEmails();
    const emails = emailsObj.map(email => email.email );
    const cohorts = await this.findAllCohorts();
    const cohortIds = cohorts.map(cohort => cohort.id);
    data.forEach(dataObject => {
      this.cohortCheck(cohortIds, dataObject);
      this.backgroundCheck(dataObject);
      this.genderCheck(dataObject);
      this.validateEmail(dataObject,  emails);
    });
    return this.errors;
  }

  async findAllEmails () {
    return await Student.findAll({
      attributes: ["email"],
      include: {
        all: true
      }
    });
  }

  async findAllCohorts () {
    return await Cohort.findAll({
      attributes: ["id"],
      include: {
        all: true
      }
    });
  }

  cohortCheck(cohortIds, obj) {
    if (!(cohortIds.includes(parseInt(obj.CohortId)))) {
      this.errors.push(`Cohort id: ${obj.CohortId} does not exist, on line ${obj.counter}`);
    }
  }

  backgroundCheck (obj) {
    if (!ethnicGroups.includes(obj.background)) {
      this.errors.push(`You have entered an invalid or not yet included background: ${obj.background} on line ${obj.counter}`);
    }
  }

  genderCheck (obj) {
    if (!genders.includes(obj.gender)) {
      this.errors.push(`You have entered an invalid or not yet included gender: ${obj.gender} on line ${obj.counter}`);
    }
  }

  validateEmail(obj, emails) {
    if (!this.isEmail(obj.email)) {
      this.errors.push(`Email: ${obj.email} is invalid on line ${obj.counter}`);
    }

    const validEmail = this.isEmailUnique(obj.email, emails);
    if (!validEmail) {
      this.errors.push(`Email: ${obj.email} already exists on line ${obj.counter}`);
    }
  }

  isEmail(email) {
    return re.test(email);
  }

  isEmailUnique(email, emails) {
    if (emails.includes(email)) { return false; }
    return true;
  }
}

module.exports = StudentChecker;