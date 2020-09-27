const express = require('express')
const router = express.Router()
const userRoute = require('./user/user.routes');
const authRoute = require('./authRoutes/auth.routes')

router.use(authRoute)
router.use(userRoute)


module.exports = router