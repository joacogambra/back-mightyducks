const router = require('express').Router()


const { create, read, one, update, destroy }= require('../controllers/hotel')



router.route('/')
.post(create)
.get(read)
router.get('/:id', one)
router.patch('/:id', update)
router.delete('/:id', destroy)


module.exports= router;