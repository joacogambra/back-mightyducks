let router = require('express').Router()
let {read, create, update} = require('../controllers/itineraries')

router.route('/')
    .post(create)
    .get(read)
router.put('/:id',update)

module.exports = router;