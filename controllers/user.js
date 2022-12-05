const User = require('../models/User')
const bcryptjs = require('bcryptjs') //de esta libreria vamos a utilizar el método hashSync para encriptar la contraseña
const crypto = require('crypto')//de este modulo vamos a requerir el método randomBytes
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../config/responses')
const jwt = require('jsonwebtoken')

const controller = {
    signUp: async (req, res, next) => {
        let { name, lastName, photo, age, email, password } = req.body
        let role = "user"
        let verify = false
        let logged = false
        let code = crypto.randomBytes(15).toString('hex')
        password = bcryptjs.hashSync(password, 10)
        try {
            await User.create({
                name, lastName, photo, age, email, password, role, verify, logged, code
            })
            await accountVerificationEmail(email, code)
            return userSignedUpResponse(req, res)
        } catch (error) {
            next(error)
        }
    },
    verify: async (req, res, next) => {
        const { code } = req.params
        try {
            let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
            if (user) {
                return res.redirect('http://localhost:3000/home')
            }
            return userNotFoundResponse(req, res)
        } catch (error) {
            next(error)
        }
    },
    signIn: async (req, res, next) => {
        let { password } = req.body
        let { user } = req
        try {
            let verifyPassword = bcryptjs.compareSync(password, user.password)
            if (verifyPassword) {
                const usuario = await User.findOneAndUpdate({ email: user.email }, { logged: user.logged = true }, { new: true })
                console.log(usuario)
                let token = jwt.sign(
                    {
                        _id: usuario._id,
                        name: usuario.name,
                        lastName: usuario.lastName,
                        photo: usuario.photo,
                        logged: usuario.logged,
                    },
                    process.env.KEY_JWT,
                    { expiresIn: 60 * 60 * 24 }
                )
                return res.status(200).json({
                    response: { user, token },
                    success: true,
                    message: 'Welcome ' + user.name + '!!'
                })
            }
            return invalidCredentialsResponse(req, res)
        } catch (error) {
            next(error)
        }
    },
    signInWithToken: async (req, res, next) => {
        let { user } = req
        try {
            return res.json({
                response: {
                    user: {
                        id: user.id,
                        name: user.name,
                        lastName: user.lastName,
                        photo: user.photo,
                        role: user.role
                    }
                },
                success: true,
                message: 'Welcome' + user.name + '!!'
            })
        } catch (error) {
            next(error)
        }
    },
    me: async (req, res) => {
        let { id } = req.params
        try {
            let user = await User.findOne({ _id: id })
            if (user) {
                res.status(200).json({
                    response: user,
                    success: true,
                    message: "Nice profile"
                })
            } else {
                userNotFoundResponse(req, res)
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    update: async (req, res) => {
        let update = req.body
        let { id } = req.params
        try {
            let user = await User.findByIdAndUpdate(id, update, { new: true })
            if (user) {
                res.status(200).json({
                    response: user,
                    success: true,
                    message: "Your profile was updated!"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    signOut: async (req, res, next) => {
        const { id } = req.user
        try {
            let user = await User.findOneAndUpdate(
                { _id: id },
                { logged: false },
                { new: true }
            )
            return userSignedOutResponse(req, res)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = controller