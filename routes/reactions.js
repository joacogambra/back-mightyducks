let router = require('express').Router()
let { create } = require ('../controllers/reactions')

router.post('/', create)