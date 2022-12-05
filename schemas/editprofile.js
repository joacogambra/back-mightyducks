const joi = require("joi");

const schemaEdit = joi.object({
  name: joi.string().min(3).max(20).messages({
    "string.empty": "Input empty",
    "string.min": "Name need 3 characters",
    "string.max": "Max 20 characters",
  }),
  lastName: joi.string().min(3).max(20).messages({
    "string.empty": "Input empty",
    "string.min": "Lastname need 3 characters",
    "string.max": "Max 20 characters",
  }),
  photo: joi.string().uri().messages({
    "string.empty": "Field photo is required",
    "string.uri": "Invalid URL",
  }),
  age: joi.number().messages({

  }),
  email: joi.string().email({ minDomainSegments: 2 }).messages({
    "string.empty": "Email is required",
    "string.email": "Enter a valid email like example@mail.com",
  }),
  password: joi.string()
    .alphanum()
    .min(6)
    .message({
      'any.required': 'Please enter an alphanumeric password with min 6 characters',
    }),
});



module.exports = schemaEdit