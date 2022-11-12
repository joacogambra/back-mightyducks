let router = require('express').Router()
let {create, read, one, update} = require('../controllers/city')

router.route('/')
    .post(create)
    .get(read)
router.get('/:id',one)
router.put('/:id',update)
// router.route('/:id')
//    .get(one)
//     .put(update)
//     .delete(destroy)

module.exports = router;