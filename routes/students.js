const express = require('express')
const router = express.Router()
const { Student } = require('../models')

router.get('/', async function (req, res) {
  if (req.body.input === undefined) {req.body.input = 'firstName'}
  const students = await Student.findAll({ include: { all: true }, order: [[req.body.input, "ASC"]]})
  res.json({ students: students })
})


module.exports = router
