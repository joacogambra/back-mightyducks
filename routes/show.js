const router = require('express').Router()

const { read , create, update, destroy }= require('../controllers/show')


router.route('/')
.get(read)
.post(create)
router.patch('/:id', update)   
router.delete('/:id', destroy) 

module.exports= router;