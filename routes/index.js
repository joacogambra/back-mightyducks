let router = require('express').Router()
// req el modulo de enrrutamiento de express
// cada modulo es un objeto
let user = require('./user') //ubic de las rutas user
let city = require('./city');
// obligo al enrrutador principal que use "/user" para controlar las rutas de user
router.use('/user',user)
router.use('/cities',city)

module.exports = router;
