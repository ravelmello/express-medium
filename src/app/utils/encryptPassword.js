const bcrypt = require('bcrypt')
const saltRounds = 20;

function encrypt(password) {
    return bcrypt.hashSync(password,saltRounds);
}

module.exports = encrypt