const mongoose= require('mongoose')
const schema= new mongoose.Schema({
    hotelId:{type:mongoose.Types.ObjectId, ref:'hotels', required:true},
    name: {type:String , required:true},
    description: {type: String, required:true},
    photo: [{type: String, required:true}],
    price: {type: Number, required:true},
    date: {type: Date, required:true},
    userId:{type:mongoose.Types.ObjectId, ref: 'users', required:true},
    comment:[{type:mongoose.Types.ObjectId, ref:'comments', }]
})

const Show= mongoose.model('shows',schema)
module.exports = Show