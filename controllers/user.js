
const User = require('../models/User')
const bcryptjs = require('bcryptjs') //de esta libreria vamos a utilizar el método hashSync para encriptar la contraseña
const crypto = require('crypto')//de este modulo vamos a requerir el método randomBytes
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse } = require('../config/responses') 
const jwt = require('jsonwebtoken')


const controller = {
    signUp : async (req,res,next) =>{
        let {name, lastName, photo, age, email, password}= req.body
        let role = "user"
        let verify= false
        let logged= false
        let code= crypto.randomBytes(15).toString('hex')
        password= bcryptjs.hashSync(password, 10)
        try{
            await User.create({
                name, lastName, photo, age, email, password, role, verify, logged, code
            })
            await accountVerificationEmail(email, code)
            return userSignedUpResponse (req, res)
        }catch(error){
            next(error)
        }

    },
    verify: async(req,res,next) => {
        //método para que un usuario verifique su cuenta
        //requiere por params el código a verificar
        const { code }= req.params
        //busca un usuario que coincida el código
        
        //y cambia verificado de false a true
            //si tiene éxito debe redirigir a alguna página (home, welcome, login)
            //si no tiene éxito debe responder con el error
        try {
            let user = await User.findOneAndUpdate({code:code}, { verified : true}, {new:true})
        if (user){
            return res.redirect('http://localhost:3000/home')
        }
            return userNotFoundResponse(req, res)

        } catch(error) {
            next(error)
        }
    },

    signIn: async(req,res,next) => {
        let { password }= req.body
        let { user } = req
      
        //método para que un usuario inicie sesión
        //luego de pasar por todas las validaciones:
            //desestructura la contraseña y el objeto user que vienen en el req
            //compara las contraseñas
                //si tiene éxito debe generar y retornar un token y debe redirigir a alguna página (home, welcome)
                    //además debe cambiar online de false a true
                //si no tiene éxito debe responder con el error
        try {
            let verifyPassword = bcryptjs.compareSync( password, user.password)
            if (verifyPassword){
                await User.findOneAndUpdate({ id: user.id },{ logged: true }, {new: true})
                let token = jwt.sign(
                    {
                        name: user.name,
                        lastName: user.lastName,
                        photo: user.photo,
                        logged: user.logged,
                    },
                    process.env.KEY_JWT,
                    {expiresIn: 60 * 60 * 24}
                )
                return res.status(200).json({
                    response: {user, token},
                    success: true,
                    message: 'Welcome' + user.name +'!!'

                })               
            }
            return invalidCredentialsResponse(req,res)


        } catch(error) {
            next(error)
        }
    },
    signInWithToken: async(req,res,next) => {
        let {user}= req
        //método para que un usuario que ya inicio sesión no la pierda al recargar
        //solo para usuarios registrados en nuestra app (social loguin se maneja en front)
        //luego de pasar por todas las validaciones:
            //debe responder con los datos del usuario
        try {
            return res.json({
               response: {user},
               success: true,
               message: 'Welcome' + user.name +'!!'
            
            })
        } catch(error) {
            next(error)
        }
    },

}

module.exports = controller