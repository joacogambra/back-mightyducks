let router = require('express').Router()
let {read, create, update, destroy} = require('../controllers/itineraries')
let schema = require('../schemas/userItinerary')
let validator = require('../middlewares/validator')
let passport = require('../config/passport')


router.post('/', validator(schema), create)
router.put('/:id', validator(schema),update)

router.route('/')
    .get(read)
router.route('/:id',passport.authenticate('jwt',{session: false}))
    .delete(destroy)


module.exports = router;