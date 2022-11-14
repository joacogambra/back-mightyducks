const router = require('express').Router()

const { read , create, update }= require('../controllers/show')


router.route('/')
.get(read)
.post(create)
router.patch('/:id', update)    

module.exports= router;