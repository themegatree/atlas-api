const { Student } = require('../../models');

const backgroundRatio = async (CohortId) => {
  backgroundQuery = await Student.findAndCountAll({
    raw: true,
    attributes: ['background'],
    where :{
      CohortId : CohortId
    }
  });

  const total = backgroundQuery.count 
  const backgrounds = backgroundQuery.rows.map(row => row.background)
  const backgroundObj = [];
 
  const uniqueBackgrounds = backgrounds.filter((background, index) => {
    return backgrounds.indexOf(background) === index;
  });
 
  const backgroundArr = [];
  uniqueBackgrounds.forEach((background,index) => {backgroundArr[index] = {type: background, count: 0, percentage: 0} });
 
  backgrounds.forEach(function (background) { backgroundObj[background] = (backgroundObj[background] || 0) + 1; });
  for (i = 0; i < backgroundArr.length; i++){
    
    if (Object.keys(backgroundObj)[i] === backgroundArr[i].type){
      backgroundArr[i].count = Object.values(backgroundObj)[i] 
      backgroundArr[i].percentage = 100 * Object.values(backgroundObj)[i] / total
      
    }
    
  }
  console.log(backgroundArr)
    return backgroundObj
};
module.exports = backgroundRatio;