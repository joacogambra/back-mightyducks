//primer paso de cualquier enrrutador, es requerir el metodo router de express
let router = require('express').Router()
let schema = require('../schemas/userSignIn')
let validator= require('../middlewares/validator')
let accountExistsSignIn = require('../middlewares/accountExistsSignIn')
let accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
let mustsignin = require('../middlewares/mustsignin')
let passport= require('../config/passport')

// desestructuro para traer los metodos que necesito enrrutar
let {create, read, update,destroy, signUp, signIn, verify, signInWithToken} = require('../controllers/user')

//utilizo el metodo route para agregar a la ruta
//concateno todas las palabras y obtengo la ruta total
// para controlar este metodo
router.post('/')

router.get('/verify/:code', verify)
router.post('/sign-in', validator(schema), accountExistsSignIn, accountHasBeenVerified, signIn)
router.post('/token',passport.authenticate("jwt",{session:false}), mustsignin, signInWithToken)
// router.route('/').post(create)
// router.get('/', read)
// router.put('/:id',update)
// router.delete('/:id',destroy)

module.exports = router;
