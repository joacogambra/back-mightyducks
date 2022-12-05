let router = require('express').Router()
let schema = require('../schemas/comments')
let validator = require('../middlewares/validator')
let passport = require('../config/passport')

let { read, create } = require('../controllers/comments')

router.get('/', read)
router.post('/', passport.authenticate("jwt", { session: false }), validator(schema), create)

module.exports = router;