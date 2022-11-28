let router = require('express').Router()
let {read, create, update, destroy} = require('../controllers/itineraries')
let schema = require('../schemas/userItinerary')
let validator = require('../middlewares/validator')
let passport = require('../config/passport')


router.post('/', passport.authenticate('jwt', { session: false }), validator(schema), create)
router.put('/:id',passport.authenticate('jwt', { session: false }),update)

router.route('/')
    .get(read)
router.route('/:id')
    .delete(destroy)


module.exports = router;