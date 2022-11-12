
const User = require('../models/User')

const controller = {
    create : async (req,res) =>{
        console.log(req)
        try{
            let newUser = await User.create(req.body)
            res.status(201).json({
                id:newUser._id,
                success:true,
                message:'user created correctly'
            })
        }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    },
    read: async(req,res)=>{
        try{
            let todos = await User.find()
            res.status(200).json({
                response:todos,
                success:true,
                message:'user found correctly'
            })
        }catch(error){
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    },
    update: async(req,res)=>{
        let {id} = req.params
        try{
            let uno = await User.findOneAndUpdate({_id:id},req.body, {new:true})
            // el metodo precisa 3 cosas:
                // dato que tiene que buscar(coincidir id)
                // dato que quiero modificar
                //obj que habilita el reemplazo del documento
                // new:true reemplaza, new:false no re-escribe al anterior
            if(uno){
                res.status(200).json({
                    id:uno._id,
                    success:true,
                    message:'user modified correctly'
                })
            }else{
                res.status(404).json({
                    success:false,
                    message:'error 404 dont found'
                })
            }
        }catch(error){
            res.status(400).json({
                success:false,
                message:'user dont found'
            })
        }
    },
    destroy: async(req,res)=>{
        let{id}=req.params
        //let{name}=req.params
        try{
            let uno  = await User.findOneAndDelete({_id:id})
            res.status(200).json({
                id:uno._id,
                //name:uno.name,
                success:true,
                message:'user deleted correctly'
            })
        }catch{
            res.status(404).json({
                success:false,
                message:'error 404 not found'
            })
        }
    }
}

module.exports = controller