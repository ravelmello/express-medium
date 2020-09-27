const express = require('express')
const AuthController = require('../../app/controllers/AuthController')

const authRoute = express.Router()

authRoute.post("/auth", AuthController.auth)

module.exports = authRoute