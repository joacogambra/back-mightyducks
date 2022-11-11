const Hotel= require('../models/Hotel')

const controller = {

    create: async (req, res)=>{
    
    try{ 
      let new_hotel = await Hotel.create(req.body)
        res.status(201).json({
            _id: new_hotel._id,
            success: true,
            message: "The Hotel was created successfully"
        })

    }
    
    catch(error){
        res.status(400).json({
            success:false,
            message: error.message
        })
     }
    
    }
}
module.exports = controller;