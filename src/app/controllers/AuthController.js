const conn = require('../database/conn')

const bcrypt = require('bcrypt')
const generateJwt = require('../utils/jwt');

module.exports = {

    async auth(request, response) {
        const {ds_login, ds_password} = request.body

        const user = await conn('user')
            .where('ds_login', ds_login)
            .select()
            .first()

        if(!user){
            return response.status(404).send({error: "User not found"})
        }

        if(!await bcrypt.compare(ds_password, user.ds_password)){
            return response.status(401).send({error: "Password incorrect"})
        }

        user.ds_password = undefined

        const token = generateJwt({id: user.id})

        response.send({
            user,
            token: token
        })

    }

}