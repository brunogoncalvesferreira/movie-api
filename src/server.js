require('express-async-errors')

const express = require('express')
const cors = require('cors')
const migrationRun = require('./database/sqlite/migrations')
const AppError = require('./utils/app.error')
const routes = require('./routes')
const uploadConfig = require('./config/upload')

migrationRun()
const port = process.env.PORT || 8888

const app = express()
app.use(express.json())
app.use(cors())

app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
