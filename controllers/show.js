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
create: async (req, res)=>{
   
    
    try{ 
      let new_show = await Show.create(req.body)
        res.status(201).json({
            response: new_show,
            success: true, 
             message: "The Show was created successfully"
        })

    }
    catch(error){
        res.status(400).json({
            success:false,
            message: "Couldn't create the Show, you must be logged in"
        })
     }
    
    },
    update: async(req,res)=>{
        let update = req.body
        let { id } = req.params
        console.log(req.body);
        try {
            let shows = await Show.find(id, update, {new:true})
            if (shows) {
                res.status(200).json({
                    response: shows,
                    success: true,
                    message: "Show updated successfully"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Couldn't update the show"
                })
            }            
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        

},
destroy: async (req, res)=>{
    
    let remove = req.body   
    let  id  = req.params.id
    console.log(id);
           
       try{ 
      let shows = await Show.findOneAndDelete({_id: id}, remove)

  if (shows){
    res.status(200).json({
        response: shows,
        success: true,     
        message: "Show were deleted successfully"
    })
} else{
    res.status(400).json({
        success: false,
        message: "Couldn't find shows related to the specified Hotel"

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