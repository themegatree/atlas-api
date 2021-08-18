const { Student } = require('../../models');


  const backgroundRatio = async (CohortId) => {
    
   // Sequelize Query that gets all the backgrounds in db 
  backgroundQuery = await Student.findAndCountAll({
    raw: true,
    attributes: ['background']
  });

  const total = backgroundQuery.count 
  // Store backgrounds in an array
  const backgrounds = backgroundQuery.rows.map(row => row.background)

  const backgroundObj = {};
  // Count the number of times each background appears
  backgrounds.forEach(function (background) { backgroundObj[background] = (backgroundObj[background] || 0) + 1; });
  // Construct the nested JS object 
  Object.keys(backgroundObj).forEach(function(background) {backgroundObj[background] = {number: backgroundObj[background], percentage: backgroundObj[background]/total*100} })
  
    return backgroundObj
};
  

module.exports = backgroundRatio;