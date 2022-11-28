const { query } = require('express')
const Itinerary = require('../models/Itinerary')

const controller ={
    read: async(req,res)=>{
        let query = {}
        console.log(query);
        if (req.query.userId) {
            query = { userId: req.query.userId };
          }
          if (req.query.citiId) {
            query = { citiId: req.query.citiId };
          }
        try{
            let una = await Itinerary.find(query, "-userId")
            if(una){
                res.status(200).json({
                    response:una,
                    success:true,
                    message:'Itineraries found correctly'})
            }else{
                res.status(404).json({
                    success:false,
                    message:'no hubo coincidencias'
                })
            }
        }catch(error){
            res.status(400).json({
                success:false,
                message:'Itinerary not found'
            })
        }
    },
    create : async (req,res) =>{
        console.log(req)
        try{
            let newUser = await Itinerary.create(req.body)
            res.status(201).json({
                id:newUser._id,
                success:true,
                message:'Itinerary created correctly'
            })
        }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    },
    update: async(req,res)=>{
        let {id} = req.params
        console.log(id);
        try{
            let uno = await Itinerary.findOneAndUpdate({_id:id},req.body, {new:true})
            if(uno){
                res.status(200).json({
                    id:uno._id,
                    success:true,
                    message:'Itinerary modified correctly'
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
                message:'user not found'
            })
        }
    },
    destroy: async(req,res)=>{
        let{id} = req.params
        try{
            let uno  = await Itinerary.findOneAndDelete({_id:id})
            res.status(200).json({
                id:uno._id,
                success:true,
                message:'Itinerary deleted correctly'
            })
        }catch{
            res.status(404).json({
                success:false,
                message:'error 404 Itinerary not found'
            })
        }
    }
}
module.exports = controller