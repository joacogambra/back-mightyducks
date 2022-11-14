const router = require('express').Router()

const { create, read, one }= require('../controllers/hotel')

router.route('/')
.post(create)
.get(read)
router.get('/:id', one)

module.exports= router;