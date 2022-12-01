const mongoose= require('mongoose')
const schema= new mongoose.Schema({
    hotelId:{type:mongoose.Types.ObjectId, ref:'hotels', required:true},
    name: {type:String , required:true},
    description: {type: String, required:true},
    photo: [{type: String, required:true}],
    price: {type: Number, required:true},
    date: {type: Date, required:true},
    userId:{type:mongoose.Types.ObjectId, ref: 'users', required:true},
    
})
// para definir un modelo es necesario el nombre de la collection y schema de datos
const Show= mongoose.model('shows',schema)
module.exports = Show