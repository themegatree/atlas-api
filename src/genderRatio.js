const {Cohort, Student, sequelize} = require('../models');


//for (i=0; i< cohortSize; i++)
 const Countingcohort = async () => {
  const cohortCount = await Cohort.findOne({
    attributes: [
      [sequelize.fn('COUNT', sequelize.col('id')), 'count']
    ]
  });
}
const cohortSize = Number(cohortCount.dataValues.count)

const genderRatio =async () => {
  
  const total = await Student.findOne({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('id')), 'count']
        ], where: {}
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

      const other = await Student.findOne({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('id')), 'count']
        ],
        where: {
          gender: 'other'
        }
      });

      const PNTS = await Student.findOne({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('id')), 'count']
        ],
        where: {
          gender: 'prefer not to say'
        }
      });

    const counts = [Number(males.dataValues.count),Number(females.dataValues.count),Number(other.dataValues.count),Number(PNTS.dataValues.count)]

    const ratios = counts.map(count => count/total_count)

    return ratios
  };
  

module.exports = genderRatio;