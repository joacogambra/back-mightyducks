const router = require('express').Router()

const { read }= require('../controllers/show')

router.route('/')
.get(read)

module.exports= router;