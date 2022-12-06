const User = require("../models/User");
const { invalidCredentialsResponse } = require('../config/responses');

async function accountExists(req, res, next) {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        req.user = user
        return next()
    }
    return invalidCredentialsResponse(req, res)
}

module.exports = accountExists 
