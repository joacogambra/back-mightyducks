//primer paso de cualquier enrrutador, es requerir el metodo router de express
let router = require('express').Router()
let schema = require('../schemas/userSignIn')
let scheme = require('../schemas/userSignUp')
let schemaEdit = require('../schemas/editprofile')
let validator= require('../middlewares/validator')
let accountExistsSignIn = require('../middlewares/accountExistsSignIn')
let accountExistsSignUp = require('../middlewares/accountExistsSignUp')
let accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
let mustsignin = require('../middlewares/mustsignin')
let passport= require('../config/passport')

// desestructuro para traer los metodos que necesito enrrutar
let { signUp, signIn, verify, signInWithToken, me, update} = require('../controllers/user')

//utilizo el metodo route para agregar a la ruta
//concateno todas las palabras y obtengo la ruta total
// para controlar este metodo
// router.post('/')

router.get('/verify/:code', verify)

router.post('/sign-up',validator(scheme),accountExistsSignUp,signUp)
router.post('/sign-in', validator(schema), accountExistsSignIn, accountHasBeenVerified, signIn)
router.post('/token',passport.authenticate("jwt",{session:false}), mustsignin, signInWithToken)
router.get('/me/:id', me)
router.patch('/me/:id', validator(schemaEdit), update)


module.exports = router;
