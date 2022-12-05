const joi = require('joi')



const schema = joi.object({
    name: joi.string()
        .required()
        .messages({
            "string.empty": "Please enter the name",
            "string.empty": "You must complete this field"
        }),
    photo: joi.string()
        .required()
        .uri()
        .messages({
            "string.base": "It must be a text ",
            "string.uri": "Please enter an valid url",
            "array.min": "Please enter at least one url",
            "string.empty": "You must complete this field"
        }),

    capacity: joi.number()
        .min(100)
        .required()
        .messages({
            "number.base": "Please enter a number",
            "number.min": "The capacity must be greater than 100",
            "number.empty": "You must complete this field"
        }),
    cityId: joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            "string.length": "The length must be greater than 24",
            "string.empty": "You must complete this field"
        }),
    userId: joi.string()
        .hex()
        .length(24)
        .required()
        .messages({
            "string.length": "The length must be greater than 24",
            "string.empty": "You must complete this field"
        }),

})

module.exports = schema