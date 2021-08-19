const express = require("express");
const router = express.Router();
const FileUploader = require("../src/fileUpload/fileUpload.js");

router.post("/", async (req, res) => {
  const fileUploader = new FileUploader();
  const errors = await fileUploader.process(req.body.assessmentType, req.files.myFile.data);
  res.json({ response: errors });
});

router.post("/history", async (req, res) => {
  const history = await UploadHistory.findAll({});

<<<<<<< HEAD
=======
    let status = ""
    if(fileUploader.errors.length === 0)status = "Success"
    else status = "Failure"
>>>>>>> d609f17 (Fixing bugs)

  res.json({history:history});
});

module.exports = router;
