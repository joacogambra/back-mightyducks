const passport = require('passport')
const passportJwt = require('passport-jwt')

const { KEY_JWT}= process.env
const User = require('../models/User')


passport.use(
    new passportJwt.Strategy(
        {
           jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
           secretOrKey: KEY_JWT
        },
        
        async (jwt_payload, done)=>{
            try{
                let user = await User.findOne({_id: jwt_payload._id})                
               
                if (user){
                    user= {
                        id: user._id,
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role,
                        photo: user.photo
                        
                    }
                    return done(null,user)
                } else {
                    return done(null, false)
                }
            }  catch (error){
                console.log(error)
                return done(error, false)
            }

        }
    )
)

module.exports = passport