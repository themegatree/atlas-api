const express = require('express');
const router = express.Router();
const { Cohort } = require('../models');

router.get('/', async function (req, res) {
  const sort = req.query.sort || "startDate"
  const order = req.query.order || "ASC"
  console.log('sort ' + sort + ' order ' + order)
  console.log('req.params ' + req.query.order )

  const cohorts = await Cohort.findAll({
    include: { all: true },
    order: [[sort, order]],
  });
  res.json({ cohorts: cohorts });
});

module.exports = router;

