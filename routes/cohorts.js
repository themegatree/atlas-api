const { rest } = require('cypress/types/lodash');
const express = require('express');
const router = express.Router();
const { Cohort } = require('../models');
const Report = require('../src/reports/Report.js')


router.get('/', async function (req, res) {
  const sort = req.query.sort || "startDate"
  const order = req.query.order || "ASC"
  const cohorts = await Cohort.findAll({
    include: { all: true },
    order: [[sort, order]],
  }).then(cohorts =>{
    res.json({ cohorts: cohorts })
  }).catch(errors => {
    res.json({ errors: ["Sorry invalid query parameters"] })
  })
})

router.get('/:id/reports', async function (req, res) {

  await Cohort.count({
    where: {id: req.params.id}
  }).then( count => {if(count !== 0) {

    const report = new Report()
    const completeReport = await report.create(req.params.id)
    res.status(200)
    res.json({ report:  completeReport})
  } else {
    res.status(404)
    res.json({ errors: ["Sorry invalid cohort id parameter, cohort id does not exist"] })
  })

  // const report = new Report()
  // const completeReport = await report.create(req.params.id)
  // res.json({ report:  completeReport})


})

module.exports = router;

