const { query } = require('express')
const City = require('../models/City')

const controller = {  
    create : async (req,res) =>{
        try{
            let newCity = await City.create(req.body) 
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
        let query = {}

        if(req.query.continent){
            query = {continent: req.query.continent}
        }
        if (req.query.name){
            query={ name: {$regex:`${req.query.name}`, $options:'i'}}
            
        }
        if (req.query.userId) {
            query = { userId: req.query.userId };
          }
        try{
            let todos = await City.find(query, "-userId")
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
         //let {query} = req
        try {
         //let cityuser = await City.find({userId:query.userId})
          let cityuser = await City.find({ _id: id },"-photo -continent -population").populate({ path:"userId", select: 'name photo -_id' });
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
                    message:'city deleted correctly'
                })
            }else{
                res.status(404).json({
                    success:false,
                    message:'error 404 not found'
                })
            }
        }catch(error){
            res.status(400).json({
                success:false,
                message:'city not found'
            })
        }
    },
    destroy: async(req,res)=>{
        let{id}=req.params
        try{
            let uno  = await City.findOneAndDelete({_id:id})
            res.status(200).json({
                id:uno._id,
                success:true,
                message:'user deleted correctly'
            })
        }catch{
            res.status(404).json({
                success:false,
                message:'error 404 dont found'
            })
        }
    }
}

module.exports = controller