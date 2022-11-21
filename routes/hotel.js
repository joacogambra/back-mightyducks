const router = require('express').Router()
const schema= require('../schemas/hotel')
const validator= require('../middlewares/validator')

const { create, read, one, update, destroy }= require('../controllers/hotel')



router.route('/')
.post(validator(schema),create)
.get(read)
router.get('/:id', one)
router.patch('/:id', update)
router.delete('/:id', destroy)



module.exports= router;