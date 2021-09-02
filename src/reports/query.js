const { Student,ModuleChallenge } = require("../../models");

class Query {
  constructor(){
    this.query = "";
  }
  async getQuery(cohortId){
    this.query = await Student.findAndCountAll({
      raw:true,
      include:[{ model:ModuleChallenge, attributes: ["challengeName", "studentScore"]}],
      attributes: ["id","gender", "background"],
      where: {
        CohortId: cohortId
      }
    });
    return this.query;
  }
}
module.exports = Query;
