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
  console.log("Backgrounds")
  console.log(backgrounds);


  // const backgroundObj = [];
  // Count the number of times each background appears
  backgrounds.forEach(function (background) { backgroundObj[background] = (backgroundObj[background] || 0) + 1; });
  // Construct the nested JS object 


  //count[background] = (count[background] || 0) + 1;

  // const backgroundArr = []; 

  // for (let i = 0; i < uniqueBackgrounds.length; i++) {
  //   const keys = ['type', 'number']
  //   const values = [background, count[background]];
  //   const backgroundObj = keys.forEach((key, i) => result[key] = values[i]);
  //   backgroundArr.append(backgroundObj);
  // }

  // How to process the data
  //1 ['White', 'White', 'Black', 'Other', 'Asian', 'Asian'];
  //2 ['White', 'Black', 'Asian', 'Other']; //List of Unique Backgrounds
  //3 [{type: White , number:  }, {type: Black, number: }, {type: Asian, }, {type: Other, }];

  // 1 Unique backgrounds
  // 2 Set type equal to unique backgrounds
  // 3 Count number of backgrounds
  // 4 Create percentage key and find percentage of each background
  // 4 Put type, number and percentage keys together 
  // 5 Put values into an array

  // 1 Unique Backgrounds
  const uniqueBackgrounds = backgrounds.filter((background, index) => {
    return backgrounds.indexOf(background) === index;
  });
  console.log("Unique Backgrounds");
  console.log(uniqueBackgrounds);
  //2 
  backgroundArr = [];
  uniqueBackgrounds.forEach((background,index) => {backgroundArr[index] = {type: background, count: 0, percentage: 0} });
  console.log("Background Array");
  console.log(backgroundArr);
  // 3 Count each of the backgrounds 
  backgroundArr.forEach(obj => {obj.count = backgrounds obj.type )

  backgrounds.forEach(function (background) { backgroundObj[background] = (backgroundObj[background] || 0) + 1; });




  //Object.keys(backgroundObj).forEach(function(background) {backgroundObj[background] = {number: backgroundObj[background], percentage: backgroundObj[background]/total*100} })
  console.log("Background Object");
  //console.log(backgroundObj);

    return backgroundObj
};
  

module.exports = backgroundRatio;