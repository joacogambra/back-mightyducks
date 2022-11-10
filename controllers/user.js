
const User = require('../models/User')

const controller = {
    
    create : async (req,res) =>{
        console.log(req)
        try{
            let newUser = await User.create(req.body)
            res.status(201).json({
                id:newUser._id,
                success:true,
                message:'user created correctly'
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