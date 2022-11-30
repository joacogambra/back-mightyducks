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
        //necesito el id del usuario que da y saca el like y evento like-dislike
        const {_id} = req.body
        console.log(_id);
        // lo saco del passport
        let {id} = req.user
        console.log(id);
        let {itineraryId} = req.params
        try{
            let one = await Itinerary.findOne({_id: itineraryId})
            if(one && one.likes.includes(id)){
                one.likes.pull(id)
                await one.save()
                res.status(200).json({
                    message:'disliked',
                    success:true
                })
            }else if(!one.likes.includes(id)){
                one.likes.push(id)
                await one.save()
                res.status(200).json({
                    message:'liked',
                    success:true
                })
            }else{
                res.status(404).json({
                    message:'not found',
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
}
module.exports = controller
