let router = require('express').Router()
let {create, read, one, update, destroy} = require('../controllers/city')
let scheme = require('../schemes/schemeCity')
let validator = require ('../middlewares/validator')
const joi = require('joi')

router.route('/')
    .post(validator(scheme),create)
    .get(read)

router.get('/:id',one)
router.put('/:id',update)
router.route('/:id')
    .delete(destroy)
//    .get(one)
//     .put(update)
    

module.exports = router;