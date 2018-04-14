const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

require('./routes.js')(app)

sequelize.sync()
  .then(function () {
    app.listen(config.port)
    console.log(`Server started on Port ${config.port}`)
  })
