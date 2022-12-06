const mustSignInResponse = require('../config/responses')

function mustsignin(req, res, next) {
    if (req.user) {
        return next()
    }
    return mustSignInResponse()
}
module.exports = mustsignin