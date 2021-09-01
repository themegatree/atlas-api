<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const FileUploader = require('../src/fileUpload.js')


router.post('/', async  (req,  res) => {
    const fileUploader = new FileUploader(req.files.myFile.data, req.body.assessmentType)
    await fileUploader.dataChecks()
    const response = await fileUploader.addToDatabase()
    res.json(response)
})



module.exports = router
=======
const express = require("express");
const router = express.Router();
const FileUploader = require("../src/fileUpload/fileUpload.js");

router.post("/", async (req, res) => {
  const fileUploader = new FileUploader();
  const errors = await fileUploader.process(req.body.assessmentType, req.files.myFile.data);
  res.json({ response: errors });
});

module.exports = router;
>>>>>>> 91b319e0acf31b307bb4229f813a4e27fb16f263
