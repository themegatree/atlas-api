const express = require("express");
const router = express.Router();

const buildReportFor = require("../src/reports/buildReportFor");

router.get("/", async function (req, res) {
  const completeReport = await buildReportFor(req.params.id);
  res.json({ report:  completeReport});
});

module.exports = router;