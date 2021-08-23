<<<<<<< HEAD
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

=======
const express = require('express')
const router = express.Router()

const { Cohort } = require('../models')

router.get('/', async function (req, res) {
  const cohorts = await Cohort.findAll({ include: { all: true }})

  res.json({ cohorts: cohorts })
})

<<<<<<< HEAD
module.exports = router
>>>>>>> 247ca7e (added file checks)
=======
module.exports = router
>>>>>>> d6f4b5f (refactored and updated cypress tests)
