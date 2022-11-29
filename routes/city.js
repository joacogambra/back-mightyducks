let router = require('express').Router()
let {create, read, one, update, destroy} = require('../controllers/city')
let scheme = require('../schemas/schemeCity')
let validator = require ('../middlewares/validator')
const joi = require('joi')
let passport = require('../config/passport')

router.post('/', passport.authenticate("jwt", { session: false }), validator(scheme) ,create)
router.route('/')
    .get(read)

router.get('/:id',one)
router.put('/:id',update)
router.route('/:id')
    .delete(destroy)
    

module.exports = router;