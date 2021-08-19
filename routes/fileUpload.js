const express = require('express')
const router = express.Router()
const FileUploader = require('../src/fileUpload.js')


router.post('/', async  (req,  res) => {
    const fileUploader = new FileUploader(req.files.upload.data, req.body.assessmentType)
    const errors = await fileUploader.dataChecks()
    console.log(errors)
})



module.exports = router