const {Cohort, Student, sequelize} = require('../../models');

//const cohortSize = (cohortCount.count)

const genderRatio =async (CohortId) => {
  
  const total = await Student.findAndCountAll({
    where: {
      CohortId: CohortId
    }
  })
  const total_count = total.count

  const males = await Student.findAndCountAll({
        where: {
          gender: 'male',
          CohortId: CohortId
        }
      });  

  const females = await Student.findAndCountAll({
        where: {
          gender: 'female',
          CohortId: CohortId
        }
      });   

  const other = await Student.findAndCountAll({     
    where: {
      gender: 'other',
      CohortId: CohortId
    }
  });

  const PNTS = await Student.findAndCountAll({ 
    where: {
      gender: 'prefer not to say',
      CohortId: CohortId
    }
  });

    const counts = [males.count,females.count,other.count,PNTS.count]
    const ratios = counts.map(count => count/total_count)

    return ratios
  };
  

module.exports = genderRatio;