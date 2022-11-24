const joi = require('joi')

const schema = joi.object({
email: joi.string()
        .required()
        .email({minDomainSegments:2})
        .message({
            'any.required': 'Please enter your email',
            'string.email': 'Enter a valid email like example@mail.com',
        }),
password: joi.string()
            .required()
            .alphanum()
            .min(6)
            .message({
                'any.required': 'Please enter your password',
            })


})
module.exports= schema