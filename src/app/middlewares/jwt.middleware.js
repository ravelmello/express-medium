const jwt = require('jsonwebtoken')
const config = require('../configs/jwt.config.json')

module.exports = (request, response, next) => {
    const authorization = request.headers.authorization

    if(!authorization) {
        return response.status(401).send({error: "Token not provided"})
    }

    const parts = authorization.split(' ')

    if(!parts === 2){
        return response.status(401).send({error: "Token format invalid"})
    }

    jwt.verify(authorization, config.secret, (err, decoded)=> {
        if(err){
            response.status(401).send({error: "Token invalid"})
        }

        request.userId = decoded.userId

        return next()
    })

}