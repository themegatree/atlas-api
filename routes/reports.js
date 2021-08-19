const express = require('express')
const router = express.Router()

const Report = require('../src/reports/Report.js')

router.get('/', async function (req, res) {
  
  // Call function to make the Java Script Report Object
  //genderRatio(id)
  
  const report = new Report(req.params.id)

  res.json({ report: await report.create() })
})


module.exports = router