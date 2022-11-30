const { response } = require('../app')
const City = require('../models/City')
const Hotel= require('../models/Hotel')

const controller = {
    read: async (req,res)=>{ 
        try{
            let hotel = await Hotel.select("photo").slice(7)
            let city = await City.select("photo").slice(7)
            let photos = hotel.join(city)
            if (hotel,city){
                res.status(200).json({
                    response: photos,
                    success: true,     
                    message: "Got all photos"
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
module.exports = controller