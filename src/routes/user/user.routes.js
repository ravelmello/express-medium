const express = require('express');
const UserController = require('../../app/controllers/UserController');
const userRoute = express.Router();


userRoute.post('/user', UserController.create)
userRoute.get('/user', UserController.listAll)
userRoute.get('/user/:id', UserController.listById)

module.exports = userRoute