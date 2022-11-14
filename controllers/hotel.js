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
    
    },   
    one: async(req,res) => { 
         let { id } = req.params
        console.log(req.params.id)
        try {
            let hotels = await Hotel.findById(id).populate({path:"userId",  select: "name photo -_id"} )
            if (hotels) {
                res.status(200).json({
                    response: hotels,
                    success: true,
                    message: "Hotel found successfully"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Couldn't find hotel"
                })
            }            
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        
    },
    update: async(req,res)=>{
        let update = req.body
        let { id } = req.params
        console.log(req.body);
        try {
            let hotels = await Hotel.findOneAndUpdate(id, update, {new:true})
            if (hotels) {
                res.status(200).json({
                    response: hotels,
                    success: true,
                    message: "Hotel found successfully"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Couldn't find hotel"
                })
            }            
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        


    }
}
module.exports = controller;