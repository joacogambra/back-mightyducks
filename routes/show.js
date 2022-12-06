const router = require('express').Router()
let schema = require('../schemas/shows')
let validator = require('../middlewares/validator')
const { read, create, update, destroy, one } = require('../controllers/show')

router.route('/')
    .get(read)
    .post(create)
router.patch('/:id', validator(schema), update)

router.route('/:id')
    .delete(destroy)
router.get('/:id', one)

module.exports = router;