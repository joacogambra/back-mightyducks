const joi = require('joi')

const schema = joi.object({
    name: joi.string().required().min(3).max(20)
        .messages({
            "string.base": "enter a city name",
            "any.required": "this field is required",
            "string.empty": "this field is empty, complete",
            "string.min": "city with minimum three characters",
            "string.max": "city with max twenty characters"
        }),
    continent: joi.string().required().max(20),
    photo: joi.string().required().uri()
        .messages({
            "string.uri": "invalid URL"
        }),
    population: joi.number().required().min(10000),
    userId: joi.any(),
})

module.exports = schema