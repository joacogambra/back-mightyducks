let router = require('express').Router()
let {create, read, one, update, destroy} = require('../controllers/city')

router.route('/')
    .post(create)
    .get(read)
router.get('/:id',one)
router.put('/:id',update)
router.route('/:id')
    .delete(destroy)
//    .get(one)
//     .put(update)
    

module.exports = router;