let router = require('express').Router()
let { read, create, update, destroy } = require('../controllers/itineraries')
let schema = require('../schemas/userItinerary')
let validator = require('../middlewares/validator')
let passport = require('../config/passport')
const joi = require('joi')
let { reactions } = require('../controllers/reactions')

router.post('/', validator(schema), create)
router.put('/:id', passport.authenticate('jwt', { session: false }), validator(schema), update)

router.route('/')
    .get(read)
router.delete("/:id", destroy)

module.exports = router;