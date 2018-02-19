const bodyParser = require('body-parser')
const express = require('express')
// const verifyJwt = require('express-jwt')

// const crypto = require('../lib/crypto')
const users = require('../lib/users')
// const auth = require('../lib/auth')

const router = express.Router()
router.use(bodyParser.json())

// router.post('/signin',
//   signIn,
//   auth.issueJwt
// )

router.post('/register', register)

function register (req, res) {
  console.log(req.body.username)
  users.exists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      users.create(req.body.username, req.body.password)
        // .then(() => next())
        .then(user => {
          res.send(user)
        })
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
}

module.exports = router
