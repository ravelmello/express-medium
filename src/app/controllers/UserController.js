const conn = require('../database/conn')
const encrypt = require('../utils/encryptPassword')

module.exports = {

    async create (request, response){
        const {ds_name, ds_email, ds_login, ds_password} = request.body
        const passCrypted = encrypt(ds_password)


        const user = await conn('user')
        .insert({
            ds_name,
            ds_email,
            ds_login,
            ds_password: passCrypted
        })

        

        return response.status(201).send({
            mensagem: {
                "User Created": {
                    "Name": ds_name,
                    "email": ds_email,
                    "login": ds_login,
                }
            }
        })

    },

    async listAll(request, response) {
        const user = await conn('user')
        .select('id', 'ds_name', 'ds_login', 'ds_email')

        return response.status(200).json({user})
    },


    async listById (request, response) {
        const { id } = request.params;

        const userFilterd = await conn('user')
        .select('id', 'ds_name', 'ds_login', 'ds_email')
        .where('id', id)

        return response.status(200).json({userFilterd})
    }

}