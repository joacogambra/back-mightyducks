// primero el modelo que necesito controlar
const { query } = require('express')
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
        let query ={}
        console.log(query);
        if(req.query.continent){
            query = {continent: req.query.continent}
        }
        /*if(req.query.population){
            query = {
                ...query,
                population: req.query.population
            }
        } de esta forma concateno otra propiedad */ 
        try{
            let todos = await City.find(query)
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
    one: async (req, res) => {
        let id = req.params.id;
        // let {query} = req
        try {
          // let cityuser = await City.find({userId:query.userId})
          let cityuser = await City.find({ _id: id }).populate({ path:"userId", select: 'name photo -_id' });
          if (cityuser) {
            res.status(200).json({
              success: true,
              message: 'the user who created the city was found',
              response: cityuser
            });
          } else {
            res.status(404).json({
              success: false,
              message: 'the user not found',
            });
          }
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error.message,
          });
        }
      },
    update: async(req,res)=>{
        let {id} = req.params
        try{
            let uno = await City.findOneAndUpdate({_id:id},req.body, {new:true})
            if(uno){
                res.status(200).json({
                    id:uno._id,
                    success:true,
                    message:'city modified correctly'
                })
            }else{
                res.status(404).json({
                    success:false,
                    message:'error 404 dont found'
                })
            }
        }catch(error){
            res.status(400).json({
                success:false,
                message:'city not found'
            })
        }
    },
}

module.exports = controller