const express = require('express');
const UserController = require('../../app/controllers/UserController');
const userRoute = express.Router();
const authMiddleware = require('../../app/middlewares/jwt.middleware')


userRoute.post('/user', authMiddleware ,UserController.create)
userRoute.get('/user', authMiddleware,UserController.listAll)
userRoute.get('/user/:id', authMiddleware, UserController.listById)

module.exports = userRoute