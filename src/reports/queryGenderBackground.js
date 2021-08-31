const { Student } = require('../../models');

class QueryGenderBackground {
    constructor(){
        this.query = ""
    }
    async getQuery(cohortId){
        
            this.query = await Student.findAndCountAll({
              raw: true,
              attributes: ['background','gender'],
              where :{
                CohortId : cohortId
              }
            })
            return this.query
            
    }
}

module.exports = QueryGenderBackground