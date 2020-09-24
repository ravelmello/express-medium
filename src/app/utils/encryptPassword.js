const bcrypt = require('bcrypt')

const saltRounds = 10;

function encrypt(password) {
    return bcrypt.hashSync(password,saltRounds);
}

module.exports = encrypt