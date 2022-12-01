const mongoose= require('mongoose')
const schema= new mongoose.Schema({
    comment: {type:String , required:true},
    photo: [{type: String}],
    showId:{type: mongoose.Types.ObjectId, ref:'shows'},
    userId:{type: mongoose.Types.ObjectId, ref:'users'},

},
{
    timestamps: true
  }
)

const Comments= mongoose.model('comments',schema)
module.exports = Comments
