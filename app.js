const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const fileupload = require("express-fileupload");

const cohortsRouter = require('./routes/cohorts.js')
const studentsRouter = require('./routes/students.js')
const fileRouter = require('./routes/fileUpload.js')
const dashboardRouter = require('./routes/dashboard.js')

app.use(fileupload());
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/cohorts', cohortsRouter)
app.use('/api/students', studentsRouter)
app.use('/api/fileUpload', fileRouter)
app.use('/api/dashboard', dashboardRouter)

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
