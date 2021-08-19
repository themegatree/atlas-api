const express = require('express')
const router = express.Router()
const FileUploader = require('../src/fileUpload.js')


router.post('/', async  (req,  res) => {
    const fileUploader = new FileUploader(req.files.myFile.data, req.body.assessmentType)
    await fileUploader.dataChecks()
    const response = await fileUploader.addToDatabase()
    console.log(fileUploader.data)
    res.json(response)
})



module.exports = router