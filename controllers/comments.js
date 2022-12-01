const Comment= require('../models/Comment')
const User = require('../models/User')

const controller ={

    create: async (req, res) => {
      console.log("llegue al controller")
    
     let {user}= req
     
    
     try {
         let new_comment=  await Comment.create({comment:req.body.comment, userId: user.id , showId: req.query.showId, photo: user.photo})
            res.status(201).json({
                
                response: new_comment,
                message: 'Comment Has Been Created',
                succes: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'Comment Could Not Be Created',
                message: error.message,
                succes: false
            })
        }

    },

    read: async (req,res) =>{
       let shows = req.query.showId
     
       if (req.query.showId){

        shows = { showId : req.query.showId }
     }
    
        try{
        let allComments= await Comment.find(shows).sort({updatedAt: -1}).populate({path:"userId",  select: "name"})
        if(allComments.length>0){
            res.status(201).json({
                response: allComments,
                message: 'Got all comments',
                succes: true
            })
        } else {
            res.status(404).json({
                response: [],
                message: 'No comments',
                success: false,
            })
        }
       
    } catch (error) {
        res.status(400).json({
            response: error.message,
            message: 'Comment Could Not Found',
            succes: false
        })
    }
        
    },
  update: async (req,res)=>{
    let update = req.body
    let {id}= req.params
   
    try{
        let commentUpdate= await Comment.findByIdAndUpdate(id, update, {new:true})
        if (commentUpdate){
          
                    res.status(200).json({
                    response: commentUpdate,
                    success: true,
                    message: "Your comment was updated!"
                }) 
        }

    }catch{
        res.status(400).json({
            success: false,
            message: error.message
        })
    }        
    },
    delete: async (req,res)=>{
        // let remove= req.body
        let {id}= req.params
        console.log(req.params)
        try{
            let deleteComment= await Comment.findByIdAndDelete({_id: id})
            if (deleteComment){
                res.status(200).json({
                    success: true,
                    message: "Your comment was deleted!"
                }) 

            }
        }catch{
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        
        }
  }
    
module.exports = controller;
