const { query } = require('express')
const Reactions = require('../models/Reactions')
const Itinerary = require('../models/Itinerary')

const controller ={
    create : async (req,res) =>{
        try{
            let newLike = await Reactions.create(req.body) 
            res.status(201).json({
                id:newLike._id,
                success:true,
                message:'reaction created correctly'
            })
        }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    },
    reactions: async (req,res) =>{
        let query = {}
        if(req.query.name){
            query = {name: req.query.name}
        }
        if(req.query.itineraryId){
            query = {itineraryId: req.query.itineraryId}
        }
        let userId = req.user.id
        try{
            let one = await Reactions.findOne(query)
            if(one.userId.includes(userId)){
                one.userId.pull(userId)
                await one.save()
               // await Itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:userId}}, {new:true})
                res.status(200).json({
                    message:'disliked',
                    success:true
                })
            }else{
                one.userId.push(userId)
                await one.save()
                // await Itinerary.findOneAndUpdate({_id:id}, {$push:{likes:userId}}, {new:true})
                res.status(200).json({
                    message:'liked',
                    success:true
                })
            }
        }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
        }          
    },
    getReactions: async (req, res) => {
        let query = {}
        if (req.query.itineraryId) {
            query = {...query, itineraryId: req.query.itineraryId }
          }
        try{
            let todos = await Reactions.find(query)
            res.status(200).json({
                response:todos,
                success:true,
                message:'Reactions found correctly'
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
