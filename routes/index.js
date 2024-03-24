const router = require('express').Router()
const passport = require('passport')

router.use('/radios', require('./radios'))

router.use('/repeaters', require('./repeaters'))

router.get('/login', passport.authenticate('github'), (req, res) => {})

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err) }
    res.redirect('/')
  })
})

module.exports = router
