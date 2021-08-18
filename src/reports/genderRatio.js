const { Student } = require('../../models');

const genderRatio =async (CohortId) => {
  
  genderQuery = await Student.findAndCountAll({
    raw: true,
    attributes: ['gender']
  });

  const total = genderQuery.count

  const genders = genderQuery.rows.map(row => row.gender)
  
  const gendersObj = {};
  genders.forEach(function (gender) { gendersObj[gender] = (gendersObj[gender] || 0) + 1; });

  Object.keys(gendersObj).forEach(function(gender) {gendersObj[gender] = {number: gendersObj[gender], percentage: gendersObj[gender]/total*100} })

  return gendersObj
};
  

module.exports = genderRatio;