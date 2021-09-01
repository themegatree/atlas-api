const express = require("express");
const router = express.Router();
const { Student } = require("../models");

router.get("/", async function (req, res) {
  const students = await Student.findAll({ include: { all: true }});
  res.json({ students: students });
});

router.get("/:id", async function (req, res) {
  const student = await Student.findOne({
    where: {
      id: req.params.id
    }
  });

  res.json({student: student});
});

module.exports = router;
