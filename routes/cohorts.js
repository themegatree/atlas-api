const express = require("express");
const router = express.Router();
const { Cohort } = require("../models");
const Report = require("../src/reports/Report.js");


router.get("/", async function (req, res) {
  const sort = req.query.sort || "startDate";
  const order = req.query.order || "ASC";
  await Cohort.findAll({
    include: { all: true },
    order: [[sort, order]],
  }).then(cohorts =>{
    res.json({ cohorts: cohorts });
  }).catch(() => {
    res.json({ errors: ["Sorry invalid query parameters"] });
  });
});

router.get("/:id/reports", async function (req, res) {
  const report = new Report();
  const completeReport = await report.create(req.params.id);
  res.json({ report:  completeReport});
});

module.exports = router;

