const express = require('express')
const router = express.Router()
const userRoute = require('./user/user.routes');

router.use(userRoute)

module.exports = router