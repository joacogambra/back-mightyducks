function userExistsResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'user already exists'
    })
}

function userSignedUpResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'User signed up'
    })
}

function userSignedOutResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'user signed out'
    })
}

function userNotFoundResponse(req,res) {
    return res.status(404).json({
        success: false,
        message: 'user not found'
    })
}

function mustSignInResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'sign in please!'
    })
}

function invalidCredentialsResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'email or password incorrect'
    })
}

function verifyResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Please, verify your email account and try again'
    })
}

function ownerResponse(req, res) {
    return res.status(401).json({
      success: false,
      message: 'Not the same user who generated the reaction',
    });
  }

function notSighted(req, res) {
    return res.status(404).json({
      success: false,
      message: "Could not be sighted",
    });
  }
  

module.exports = {
    userSignedUpResponse,
    userExistsResponse,
    userNotFoundResponse,
    userSignedOutResponse,
    mustSignInResponse,
    invalidCredentialsResponse,
    verifyResponse,
    ownerResponse,
    notSighted
}