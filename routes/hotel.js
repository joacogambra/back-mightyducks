const router = require('express').Router()
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')
let passport = require('../config/passport')

const { create, read, one, update, destroy } = require('../controllers/hotel')

router.route('/')
    .post(validator(schema), passport.authenticate("jwt", { session: false }), create)
    .get(read)
router.get('/:id', one)
router.patch('/:id', passport.authenticate("jwt", { session: false }), update)
router.delete('/:id', passport.authenticate("jwt", { session: false }), destroy)

module.exports = router;