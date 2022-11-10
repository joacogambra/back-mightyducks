let router = require('express').Router()
let {create} = require('../controllers/city')

router.route('/create').post(create)

module.exports = router;