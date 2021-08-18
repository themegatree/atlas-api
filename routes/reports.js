const express = require('express')
const router = express.Router()
const { Student } = require('../models')

router.get('/cohorts/:id/report', async function (req, res) {
  

  res.json({ students: students })
})


module.exports = router