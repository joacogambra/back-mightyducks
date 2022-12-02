let router = require('express').Router()
let { create , reactions , getReactions } = require ('../controllers/reactions')
let passport = require('../config/passport')

router.post('/', create)
router.put('/',passport.authenticate("jwt", { session: false }), reactions)
router.get('/',passport.authenticate("jwt", { session: false }), getReactions)

module.exports= router;