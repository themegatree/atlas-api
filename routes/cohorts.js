const express = require("express");
const router = express.Router();

const { Cohort } = require("../models");


//Update API to handle request to `/api/cohorts?sort=date&order=descending`
router.get("/", async function (req, res) {
  const sort = req.query.sort;
  const order = req.query.order;
  console.log("sort " + sort + " order " + order)
  console.log("req.params " + req.query.order )

  if(sort === undefined && order === undefined){
    const cohorts = await Cohort.findAll({
      include: { all: true },
  });
  res.json({ cohorts: cohorts });
  }
  else if ((sort === "name" &&  order === undefined)  ){
        const cohorts = await Cohort.findAll({
      include: { all: true },
      order: [[sort, "ASC"]],
  });
  
  res.json({ cohorts: cohorts });
  }
    else if (sort === "startDate" &&  order === undefined){
        const cohorts = await Cohort.findAll({
      include: { all: true },
      order: [[sort, "DESC"]],
  });
  
  res.json({ cohorts: cohorts });
  }
  else{
    const cohorts = await Cohort.findAll({
      include: { all: true },
      order: [[sort, order]],
  });
  
  res.json({ cohorts: cohorts });
    }

});

module.exports = router;

