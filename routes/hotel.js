const router = require('express').Router()


const { create, read, one, update }= require('../controllers/hotel')


router.route('/')
.post(create)
.get(read)
router.get('/:id', one)
router.patch('/:id', update)


module.exports= router;