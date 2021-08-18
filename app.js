const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const fileupload = require('express-fileupload')

const cohortsRouter = require('./routes/cohorts.js')
const studentsRouter = require('./routes/students.js')
const fileRouter = require('./routes/fileUpload.js')

app.use(fileupload())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/cohorts', cohortsRouter)
app.use('/api/students', studentsRouter)
app.use('/api/fileUpload', fileRouter)

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
