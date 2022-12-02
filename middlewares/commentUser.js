            const User = require("../models/User");


            async function commentUser(req, res, next) {
                
                const user = await User.findOne({userId: req.body._id})
              

                if (user) {
                
                    req.user = user
                    return next()
                }
            
                return res.status(404).json({
                    success: false,
                    message: 'Not your comment'
                })
                
            }


            module.exports =  commentUser 
