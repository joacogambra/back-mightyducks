const joi = require("joi");

const schemaComments= joi.object({
    comment: joi.string().required().min(3).max(140)
                .message({
                    "string.empty": "Write something before send",
                    "string.min": "At least 3 characters",
                    "string.max": "Max 140 characters", 
                }),
    showId: joi.any(),
    itineraryId: joi.any()
    
})

module.exports = schemaComments