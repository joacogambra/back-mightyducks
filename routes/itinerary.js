let router = require('express').Router()
let {read, create, update, destroy} = require('../controllers/itineraries')

router.route('/')
    .post(create)
    .get(read)
router.put('/:id',update)

router.route('/:id')
    .delete(destroy)

module.exports = router;