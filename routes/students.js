const express = require("express");
const router = express.Router();
const { Student } = require("../models");

router.get("/", async function (req, res) {
  let students = await Student.findAll({ include: { all: true }});
  students = students || {};
  
  res.json({ students: students });
});

router.get("/:id", async function (req, res) {
  let student = await Student.findOne({include: {all: true },
    where: {
      id: req.params.id
    }
  });
  student = student || {};

  res.json({ student: student });
});

module.exports = router;
