 const {Student, sequelize} = require('../models');

 const genderRatio = async () => {
 
  const total = await Student.findOne({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('id')), 'count']
        ]
      });

  const total_count = Number(total.dataValues.count)

  const males = await Student.findOne({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('id')), 'count']
        ],
        where: {
          gender: 'male'
        }
      });    
      
  const females = await Student.findOne({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('id')), 'count']
        ],
        where: {
          gender: 'female'
        }
      });   

    const counts = [Number(males.dataValues.count),Number(females.dataValues.count)]

    const ratios = counts.map(count => count/total_count)

    return ratios
  };

module.exports = genderRatio;