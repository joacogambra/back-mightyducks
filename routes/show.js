const router = require('express').Router()

const { read , create, update, destroy }= require('../controllers/show')


router.route('/')
.get(read)
.post(create)
router.patch('/:id', update)   

router.route('/:id')
    .delete(destroy)

module.exports= router;