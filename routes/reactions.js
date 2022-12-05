let router = require('express').Router()
let { create, update, getReactions, deletear } = require('../controllers/reactions')
let passport = require('../config/passport')
let Reactions = require('../models/Reactions')
let correctlyUser = require('../middlewares/correctlyUser')

router.post('/', create)
router.put('/', passport.authenticate("jwt", { session: false }), update)
router.get('/', passport.authenticate("jwt", { session: false }), getReactions)
router.put('/:id', passport.authenticate("jwt", { session: false }), correctlyUser(Reactions), deletear)

module.exports = router;