const router = require('express').Router()

const { create }= require('../controllers/hotel')

router.route('/').post(create)

module.exports= router;