const jwt = require('jsonwebtoken')
const config = require('../configs/jwt.config.json')

function generateJwt(params = {}){
        return jwt.sign(params, config.secret, {
            expiresIn: config.expiration
        })
}

module.exports = generateJwt

