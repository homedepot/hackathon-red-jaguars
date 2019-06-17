const router = require('express').Router()
const passport = require('passport')
const Account = require('../db/Account')

router.post('/register', function(req, res, next) {
  console.log('registering user')
  const { username, firstName, lastName, role } = req.body

  Account.register(
    new Account({ username, firstName, lastName, role }),
    req.body.password,
    function(err) {
      if (err) {
        return next(err)
      }

      res.sendStatus(200)
    }
  )
})

router.post('/login', passport.authenticate('local'), function(req, res) {
  const { username, role } = req.user
  res.json({ username, role })
})

router.get('/logout', function(req, res) {
  req.logout()
  res.sendStatus(200)
})

module.exports = router
