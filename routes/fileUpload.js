const express = require("express");
const router = express.Router();
const FileUploader = require("../src/fileUpload/fileUpload.js");
const {UploadHistory } = require("../models");

router.post("/", async (req, res) => {
  const fileUploader = new FileUploader();
  const errors = await fileUploader.process(req.files.myFile.data);
  res.json({ response: errors });
});

router.get("/history", async (req, res) => {
  const history = await UploadHistory.findAll({});


  res.json({history:history});
});

module.exports = router;
