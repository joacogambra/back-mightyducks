const joi = require('joi')



const schema= joi.object({
    name:joi.string()
            .required()
            .messages({
                "string.empty" : "Please enter the name"     
            }),
    photo:joi .array()
            .min(1)
            .max(3)
            .required()
                .items(
                     joi.string()
                        .uri(),
                     )
                     .messages({
                        "array.base" : "It must be an array of links ",
                        "string.uri" : "Please enter an valid url", 
                        "array.min" : "Please enter at least one url",
                    }),
          
    capacity:joi.number()
            .min(100)
            .required()
            .messages({
                "number.base": "PLease enter a number",
                "number.min": "The capacity must be greater than 100"
            }),
    cityId:joi.string()
            .hex()
            .length(24)
            .required(),
            // .message({
            //     "string.length": "The length must be greater than 24"
            // }),
    userId:joi.string()
            .hex()
            .length(24)
            .required(),
            // .message({
            //     "string.length": "The length must be greater than 24"
            // }),

})

module.exports= schema