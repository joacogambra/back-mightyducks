// primero el modelo que necesito controlar
const City = require('../models/City')

// segundo defino el objeto controller
const controller = {
    // todos los metodos son asincronos, dependen del tiempo de espera de la peticion/respuesta
    // async () =>{},
    // siempre se depende de req y res
    //metodo para crear
    create : async (req,res) =>{
        try{
            let newCity = await City.create(req.body) //req.body es de donde viene para crear
            // variable que espera la creacion de un nuevo documento
            // el obj con los datos necesarios para crear esta en req.body
            // una vez creado el doc, elaboro la respuesta que va a devolver la peticion
            res.status(201).json({
                id:newCity._id,
                success:true,
                message:'city created correctly'
            })
        }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    },
    read: async(req,res)=>{
        try{
            let todos = await City.find()
            res.status(200).json({
                response:todos,
                success:true,
                message:'cities found correctly'
            })
        }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    },
}

module.exports = controller