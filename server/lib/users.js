const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)
const crypto = require('./crypto')

function exists (username, testDb) {
  const connection = testDb || knex
  return connection('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function create (username, password, testDb) {
  const hash = crypto.getHash(password)
  const connection = testDb || knex

  return connection('users')
    .insert({
      username: username,
      hash: hash
    })
}

module.exports = {
  exists,
  create
}
