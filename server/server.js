const path = require('path')

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const apiRoutes = require('./routes/auth')

const server = express()

server.use(bodyParser.json())

server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/', apiRoutes)

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
