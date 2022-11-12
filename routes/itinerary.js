let router = require('express').Router()
let {read} = require('../controllers/itineraries')

router.get('/', read)

module.exports = router;