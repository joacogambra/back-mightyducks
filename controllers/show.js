const Show= require('../models/Show')

const controller={

        read: async (req, res)=>{

            let  query  = {}
    
            if (req.query){
               query = {hotelId : req.query.hotelId }
            }
           
              console.log(req.query.hotelId)
               try{ 
              let shows = await Show.find(query).select('-userId')

          if (shows){
            res.status(200).json({
                response: shows,
                success: true,     
                message: "Shows are filtered successfully"
            })
        } else{
            res.status(400).json({
                success: false,
                message: "Couldn't find shows"

            })
        }
    } catch(error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }        
},


}
module.exports = controller;