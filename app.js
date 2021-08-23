const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const cohortsRouter = require('./routes/cohorts.js')
const studentsRouter = require('./routes/students.js')
const reportsRouter = require('./routes/reports.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/cohorts', cohortsRouter)
app.use('/api/students', studentsRouter)
app.use('/api/cohorts/:id/reports', reportsRouter)

app.listen(port, () => {
  "listening on port: ${port}"
})
