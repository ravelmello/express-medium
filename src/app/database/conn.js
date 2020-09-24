const knex = require('knex')
const conf = require('../../../knexfile');
const env = conf.development
const conn = knex(env)

module.exports = conn