let router = require('express').Router()
let {create, read, one, update, destroy} = require('../controllers/city')

router.route('/')
    .post(create)
    .get(read)
// router.route('/:id')
//     .get(one)
//     .put(update)
//     .delete(destroy)

module.exports = router;