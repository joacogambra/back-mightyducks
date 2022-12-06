let router = require('express').Router()
let user = require('./user')
let city = require('./city');
let itinerary = require('./itinerary')
let hotel= require('./hotel')
let show = require('./show')
let comments= require('./comment')
let reactions = require('./reactions')

router.use('/api/auth',user)
router.use('/cities',city)
router.use('/itineraries',itinerary)
router.use('/api/hotels',hotel)
router.use('/api/hotels/:id ',hotel)
router.use('/api/shows?hotelId=id',show)
router.use('/api/shows',show)
router.use('/api/comments', comments)
router.use('/reactions', reactions)

module.exports = router;

