const { query } = require('express')
const Itinerary = require('../models/Itinerary')

const controller ={
    read: async(req,res)=>{
        let {query} = req
        try{
            //let una = await Itinerary.find(query).populate({path:'citiId', select:'name'})
            let una = await Itinerary.find({citiId:query.citiId},"-userId")
            if(una){
                res.status(200).json({
                    response:una,
                    success:true,
                    message:'Itinerary found correctly'})
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
}
module.exports = controller