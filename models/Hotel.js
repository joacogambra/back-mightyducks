const mongoose= require('mongoose')
const schema= new mongoose.Schema({
    name: {type:String , required:true},
    photo: [{type: String, required:true}],
    capacity: {type: Number, required:true},
    cityId:{type: mongoose.Types.ObjectId, ref:'cities', required:true},
    userId:{type: mongoose.Types.ObjectId, ref:'users',required:true},

})
// para definir un modelo es necesario el nombre de la collection y schema de datos
const Hotel= mongoose.model('hotels', schema)
module.exports = Hotel
