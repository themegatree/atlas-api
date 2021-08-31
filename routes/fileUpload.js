const express = require("express");
const router = express.Router();
const FileUploader = require("../src/fileUpload/fileUpload.js");

router.post("/", async (req, res) => {
  const fileUploader = new FileUploader();
  const errors = await fileUploader.process(req.body.assessmentType, req.files.myFile.data);
  res.json({ response: errors });
});

module.exports = router;
