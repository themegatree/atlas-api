const { Student } = require('../../models');

const genderRatio =async (CohortId) => {
  
  genderQuery = await Student.findAndCountAll({
    raw: true,
    attributes: ['gender']
  });

  const total = genderQuery.count

  const genders = genderQuery.rows.map(row => row.gender)
  

  genders.forEach(function (gender) { gendersArr[gender] = (gendersArr[gender] || 0) + 1; });

  Object.keys(gendersArr).forEach(function(gender) {gendersArr[gender] = {number: gendersArr[gender], percentage: gendersArr[gender]/total*100} })

  return gendersArr
};
  

module.exports = genderRatio;