const express = require('express')
const router = express.Router()

const Report = require('../src/reports/Report.js')

router.get('/', async function (req, res) {
  const report = new Report()
  const completeReport = await report.create(req.params.id)
  res.json({ report: completeReport })
})

module.exports = router
