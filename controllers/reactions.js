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
    update: async (req,res) =>{
        let query = {}
        if(req.query.name){
            query = {...query, name: req.query.name}
        }
        if(req.query.itineraryId){
            query = {...query, itineraryId: req.query.itineraryId}
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
                    success:true,
                    response:{id: one._id, itineraryId:one.itineraryId}
                })
            }else{
                one.userId.push(userId)
                await one.save()
                // await Itinerary.findOneAndUpdate({_id:id}, {$push:{likes:userId}}, {new:true})
                res.status(200).json({
                    message:'liked',
                    success:true,
                    response:{id: one._id, itineraryId:one.itineraryId}
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
        let { itineraryId , userId } = req.query
        let {user} = req
        if (itineraryId) {
          try {
            let reactions = await Reactions.find({ itineraryId }).lean()
            if (reactions.length) {
              reactions = reactions.map(event => {
                let booleanReaction = !!event.userId.find(userReaction => userReaction.equals(user.id))
                return { ...event, userId: event.userId.length, booleanReaction }})
              res.status(200).json({
                success: true,
                response: reactions,
                message: 'found',
              })
            }  else {
                res.status(404).json({
                  success: false,
                  message: 'not found',
                })
              }
          }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
        }else if (userId) {
            try {
              let reactions = await Reactions.find({ userId }, "-userId").populate("itineraryId", "name photo");
              if (reactions.length) {
                res.status(200).json({
                  success: true,
                  response: reactions,
                  message: "Found",
                });
              } else {
                res.status(404).json({
                  success: false,
                  message: 'not found',
                });
              }
            } catch(error){
                res.status(400).json({
                    success:false,
                    message:error.message
                })
            }
          }
      },
    deletear: async (req, res) => {
        let { user } = req
        let { id } = req.params
        try {
            let reaction = await Reactions.findOneAndUpdate({ _id: id }, { $pull: { userId: user.id } }, { new: true })
            if (reaction) {
            res.status(200).json({
            success: true,
            id: reaction._id,
            message: 'Your reactions is deleted',
            })
        } else {
            res.status(404).json({
            success: false,
            message: 'not found',
        })
      }
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
    },
}
module.exports = controller
