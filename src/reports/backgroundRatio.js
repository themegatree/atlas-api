const { Student } = require("../../models");

const backgroundRatio = async (cohortId) => {
  const backgroundQuery = await Student.findAndCountAll({
    raw: true,
    attributes: ["background"],
    where :{
      CohortId : cohortId
    }
  });
  const total = backgroundQuery.count; 
  let backgrounds = backgroundQuery.rows.map(row => row.background);
  backgrounds = backgrounds.map(background => (background === null) ? "no data" : background);
  const backgroundObj = [];
  const uniquebackgrounds = backgrounds.filter((background, index) => {
    return backgrounds.indexOf(background) === index;
  });
  const backgroundArr = [];
  uniquebackgrounds.forEach((background,index) => {backgroundArr[index] = {type: background, number: 0, percentage: 0}; });
  backgrounds.forEach(function (background) { backgroundObj[background] = (backgroundObj[background] || 0) + 1; });
  for (let i = 0; i < backgroundArr.length; i++){
    if (Object.keys(backgroundObj)[i] === backgroundArr[i].type){
      backgroundArr[i].number = Object.values(backgroundObj)[i]; 
      backgroundArr[i].percentage = (100 * Object.values(backgroundObj)[i] / total).toFixed(2);
    }
  }
  return backgroundArr;
};

module.exports = backgroundRatio;