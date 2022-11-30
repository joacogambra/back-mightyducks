let router = require('express').Router()
let { create , reactions } = require ('../controllers/reactions')

router.post('/', create)

module.exports= router;