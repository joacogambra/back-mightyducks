let router = require('express').Router()
// req el modulo de enrrutamiento de express
// cada modulo es un objeto
let user = require('./user') //ubic de las rutas user
let city = require('./city');
let itinerary = require('./itinerary')
let hotel= require('./hotel')
let show = require('./show')

// obligo al enrrutador principal que use "/user" para controlar las rutas de user
router.use('/user',user)
router.use('/cities',city)
router.use('/itineraries',itinerary)
router.use('/api/hotels',hotel)
router.use(' /api/hotels/:id ',hotel)
router.use('/api/shows?hotelId=id',show)
router.use('/api/shows',show)
router.use('/api/hotels?userId=id', hotel)



module.exports = router;

