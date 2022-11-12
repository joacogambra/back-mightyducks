const router = require('express').Router()

const { create, read }= require('../controllers/hotel')

router.route('/')
.post(create)
.get(read)

module.exports= router;