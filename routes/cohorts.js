const express = require("express");
const router = express.Router();

const { Cohort } = require("../models");

//Update API to handle request to `/api/cohorts?sort=date&order=descending`
router.get("/", async function (req, res) {
  const sort = req.params.sort;
  const order = req.params.order;
  const cohorts = await Cohort.findAll({
    include: { all: true },
    order: [[sort, order]],
  });

  //we use json to pass
  res.json({ cohorts: cohorts });
});


module.exports = router;
