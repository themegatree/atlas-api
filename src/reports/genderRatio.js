const { Student } = require('../../models');
const genderRatio = async (cohortId) => {
  const genderQuery = await Student.findAndCountAll({
    raw: true,
    attributes: ['gender'],
    where :{
      CohortId : cohortId
    }
  });
  const total = genderQuery.count 
  const genders = genderQuery.rows.map(row => row.gender)
  for (let i=0; i < genders.length; i++) {
    if (genders[i] === null) {
      genders[i] = 'no data'
    }
  }
  const genderObj = [];
  const uniquegenders = genders.filter((gender, index) => {
    return genders.indexOf(gender) === index;
  });
  const genderArr = [];
  uniquegenders.forEach((gender,index) => {genderArr[index] = {type: gender, number: 0, percentage: 0} });
  genders.forEach(function (gender) { genderObj[gender] = (genderObj[gender] || 0) + 1; });
  for (i = 0; i < genderArr.length; i++){
    if (Object.keys(genderObj)[i] === genderArr[i].type){
      genderArr[i].number = Object.values(genderObj)[i] 
      genderArr[i].percentage = (100 * Object.values(genderObj)[i] / total).toFixed(2)
    } 
  }
    return genderArr;
};

genderRatio(1)

module.exports = genderRatio;