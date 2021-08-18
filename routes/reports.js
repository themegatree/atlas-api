const express = require('express')
const router = express.Router()

router.get('/cohorts/:id/report', async function (req, res) {
  
  // Call function to make the Java Script Report Object
  //genderRatio(id)
  
  //  const report = await createReport(req.params.id)

  res.json({ report: report })
})


module.exports = router