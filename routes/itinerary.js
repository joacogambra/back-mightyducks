let router = require('express').Router()
let {read, create} = require('../controllers/itineraries')

router.route('/')
    .post(create)
    .get(read)

module.exports = router;