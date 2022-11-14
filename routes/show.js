const router = require('express').Router()

const { read , create }= require('../controllers/show')

router.route('/')
.get(read)
.post(create)

module.exports= router;