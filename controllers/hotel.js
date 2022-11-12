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
    
    },

  read: async (req, res)=>{
    let query= {}
    let order= {}
    console.log(query)
    if (req.query.name){
        query={ name: {$regex:`${req.query.name}`, $options:'i' }}
    }
    if (req.query.order){
       
        order={ capacity: req.query.order} 

    }
  

       try{ 
      let hotels = await Hotel.find(query).sort(order)

      if (hotels){
        res.status(200).json({
            response: hotels,
            success: true,     
            message: "hotels are filtered successfully"
        })
    } else{
        res.status(400).json({
            success: false,
            message: "Couldn't find hotels"

        })
    }

    
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