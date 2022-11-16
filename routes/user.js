//primer paso de cualquier enrrutador, es requerir el metodo router de express
let router = require('express').Router()
// desestructuro para traer los metodos que necesito enrrutar
let {create, read, update,destroy} = require('../controllers/user')

//utilizo el metodo route para agregar a la ruta
//concateno todas las palabras y obtengo la ruta total
// para controlar este metodo
router.route('/').post(create)
router.get('/', read)
router.put('/:id',update)
router.delete('/:id',destroy)

module.exports = router;
