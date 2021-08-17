const express = require('express')
const router = express.Router()

const { Cohort } = require('../models')

router.get('/', async function (req, res) {
  const cohorts = await Cohort.findAll({ include: { all: true }})

  res.json({ cohorts: cohorts })
})

module.exports = router
