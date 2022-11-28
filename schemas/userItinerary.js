const joi = require('joi')

const schema = joi.object({
    citiId:joi.string().required(),
    name:joi.string().required(),
    photo:joi.array().required().items(joi.string().uri()).length(3).message({
        'any.required':'Need three URLs',
        'string.uri':'Need three URLs'
    }),
    description:joi.string().required(),
    price:joi.number().required(),
    duration:joi.number().required().min(1).message({
        'any.required':'Duration is required field',
        'number.min':'Minimum  duration is 1 hour'
    }),
    userId:joi.string().required()
})

module.exports = schema