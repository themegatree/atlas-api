const express = require('express')
const router = express.Router()
const FileUploader = require('../src/fileUpload.js')

router.post('/', async (req, res) => {
  if (!req.files.myFile) {
    res.json({ response: 'A file must be uploaded' })
  }
  const fileUploader = new FileUploader(req.files.myFile.data, req.body.assessmentType)
  await fileUploader.dataChecks()
  const response = await fileUploader.addToDatabase()
  res.json({ response: response })
})

module.exports = router
