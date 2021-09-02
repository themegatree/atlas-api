const express = require("express");
const router = express.Router();
const { Student } = require("../models");
const methodOverride = require("method-override");
router.use(methodOverride("_method"));

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

router.get("/:id", async function (req,res) {
  const student = await Student.findOne({where: {id: req.params.id}});
  res.json({student:student});
});

const permittedParams = ["firstName", "lastName", "githubUsername", "email"];
router.put("/:id", async function (req,res) {
  const response = { status: "failure", student: {}, errors: "" };
  const student = await Student.findOne({ where:{ id:req.params.id }});
  console.log(req.body);
  if (student === null) {
    response.errors = "missing record";
    res.json(response);
  } else if (!Object.keys(req.body).every(key => permittedParams.includes(key))) {
    response.errors = "invalid params";
    res.json(response);
  } else if (req.body[Object.keys(req.body)] === "") {
    response.errors = "no input";
    res.json(response);
  } else {

    student.update(req.body)
      .then(student => {
        response.status = "success";
        response.student = student;
        res.json(response);
      })
      .catch(error => {
        response.errors = error.message;
        res.json(response);
      });
  }
});

module.exports = router;
