const Usuario = require("../models/User");
const { userExistsResponse } = require("../config/responses");

async function accountExists(req, res, next) {
    const user = await Usuario.findOne({mail: req.body.mail})
    if (user) {
        userExistsResponse(req,res)
    }
    return next()
}

module.exports =  accountExists 
