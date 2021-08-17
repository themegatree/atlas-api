const { Cohort } = require('../models');

const createCohort = async () => {
  console.log('creating cohort');
  await Cohort.create({
    name: 'test cohort',
    date: '12/01/2020',
  });
};

module.exports = createCohort;
