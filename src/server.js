const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 8888


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
