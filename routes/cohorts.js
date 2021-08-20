const express = require('express');
const router = express.Router();
const { Cohort } = require('../models');

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

module.exports = router;

