const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('../routes/routes')

app.use(cors())
app.use(express.json())

module.exports = app;
