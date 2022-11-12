let router = require('express').Router()
let {create, read, one} = require('../controllers/city')

router.route('/')
    .post(create)
    .get(read)
router.get('/:id',one)
// router.route('/:id')
//    .get(one)
//     .put(update)
//     .delete(destroy)

module.exports = router;