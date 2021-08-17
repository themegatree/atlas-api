const express = require('express')
const router = express.Router()
const { Student } = require('../models')

router.get('/', async function (req, res) {
  const students = await Student.findAll({ include: { all: true },order: [["firstName", "ASC"]]})

  res.json({ students: students })
})


module.exports = router
