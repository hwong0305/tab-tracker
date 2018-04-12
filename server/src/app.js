const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/status', function (req, res) {
  res.json({
    message: 'Hello World'
  })
})

app.listen(process.env.PORT || 8081, function () {
  console.log('Now listening on Port 8081')
})
