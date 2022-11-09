const mongoose= require('mongoose')
const schema= new mongoose.Schema({
    name: {type:String , required:true},
    lastName: {type: String, required:true},
    age: {type: Number, required:true},
    email: {type:String , required:true},
    password: {type: String, required:true},
    code: {type: String , required:true},
    verified: {type:Boolean , required:true},
    logged: {type:Boolean , required:true},

})
// para definir un modelo es necesario el nombre de la collection y schema de datos
const Adm= mongoose.model('adms',schema)
module.exports = Adm