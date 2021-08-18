const {Cohort, Student, sequelize} = require('../../models');

//
  const backgroundRatio = async (CohortId) => {
    
   // Sequelize Query that gets all the backgrounds in db 
  backgroundQuery = await Student.findAndCountAll({
    raw: true,
    attributes: ['background']
  });

  const total = backgroundQuery.count 
  // Store backgrounds in an array
  const backgrounds = backgroundQuery.rows.map(row => row.background)
  const backgroundObj = [];
  // Count the number of times each background appears
  backgrounds.forEach(function (background) { backgroundObj[background] = (backgroundObj[background] || 0) + 1; });
  // Construct the nested JS object 
  Object.keys(backgroundObj).forEach(function(background) {backgroundObj[background] = {number: backgroundObj[background], percentage: backgroundObj[background]/total*100} })
  
  console.log("Please work!")
  console.log(backgroundObj);


  // BackgroundArray=[white,black,mexicans,other,PNTS]

  // JSON 
  //backgrounds = 

  //For Loop 
  // background.forEach( background => {
    // query findAndCountAll
    // count

  //})


  // const  test = await Student.findAndCountAll({
  //   where: {
  //     background: backgrounds,
  //     CohortId: CohortId
  //   }
  // });  

  //console.log(test)

  // const total = await Student.findAndCountAll({
  //   where: {
  //     CohortId: CohortId
  //   }
  // })
  // const total_count = total.count

  // const  whites = await Student.findAndCountAll({
  //       where: {
  //         background: 'white',
  //         CohortId: CohortId
  //       }
  //     });  

    

  // const blacks = await Student.findAndCountAll({
  //       where: {
  //         background: 'black',
  //         CohortId: CohortId
  //       }
  //     });   

  // const mexicans = await Student.findAndCountAll({     
  //   where: {
  //     background: 'mexican',
  //     CohortId: CohortId
  //   }
  // });

  // const other = await Student.findAndCountAll({     
  //   where: {
  //     background: 'other',
  //     CohortId: CohortId
  //   }
  // });

  // const PNTS = await Student.findAndCountAll({ 
  //   where: {
  //     background: 'prefer not to say',
  //     CohortId: CohortId
  //   }
  // });

    //const backgroundObj = [males.count,females.count,other.count,PNTS.count]
    //const ratios = backgroundObj.map(count => count/total_count)

    // backgrounds = {
    //   Background: {
    //     White: {

    //     }
    //   }
    // }



    return backgroundObj
  };
  

module.exports = backgroundRatio;