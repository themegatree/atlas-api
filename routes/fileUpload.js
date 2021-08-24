const express = require('express')
const router = express.Router()
const FileUploader = require('../src/fileUpload.js')

router.post('/', async (req, res) => {
  const fileUploader = new FileUploader( req.body.assessmentType, req.files.myFile.data)
  if (fileUploader.validFile) {
    await fileUploader.dataChecks()
    const response = await fileUploader.addToDatabase()
    res.json({ response: response })
  }
  else {
    res.json({ response: fileUploader.errors })
  }
})

module.exports = router