let router = require('express').Router()
// req el modulo de enrrutamiento de express
// cada modulo es un objeto
let user = require('./user') //ubic de las rutas user
let city = require('./city');
let itinerary = require('./itinerary')
let hotel= require('./hotel')
let show = require('./show')
let reactions = require('./reactions')

// obligo al enrrutador principal que use "/user" para controlar las rutas de user
router.use('/api/auth',user)
router.use('/cities',city)
router.use('/itineraries',itinerary)
router.use('/api/hotels',hotel)
router.use('/api/hotels/:id ',hotel)
router.use('/api/shows?hotelId=id',show)
router.use('/api/shows',show)
router.use('/reactions',reactions)



module.exports = router;

