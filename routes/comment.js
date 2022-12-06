let router = require('express').Router()
let schema = require('../schemas/comments')
let validator = require('../middlewares/validator')
let passport = require('../config/passport')
let commentUser = require('../middlewares/commentUser')
let { read, create, update } = require('../controllers/comments')
let controllers = require('../controllers/comments')

router.get('/', read)
router.post('/', passport.authenticate("jwt", { session: false }), validator(schema), create)
router.put('/:id', passport.authenticate("jwt", { session: false }), validator(schema), commentUser, update)
router.delete('/:id', passport.authenticate("jwt", { session: false }), commentUser, controllers.delete)

module.exports = router;