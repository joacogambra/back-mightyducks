const joi = require("joi");

const scheme = joi.object({
  name: joi.string().required().min(3).max(20).messages({
    "any.required": "Name is required",
    "string.empty": "Input empty",
    "string.min": "Name need 3 characters",
    "string.max": "Max 20 characters",
  }),
  lastName: joi.string().required().min(3).max(20).messages({
    "any.required": "Lastname is required",
    "string.empty": "Input empty",
    "string.min": "Lastname need 3 characters",
    "string.max": "Max 20 characters",
  }),
  photo: joi.string().required().uri().messages({
    "any.required": "Field photo is required",
    "string.empty": "Field photo is required",
    "string.uri": "Invalid URL",
  }),
  age: joi.number().required().messages({
    "any.required": "Field age is requiered",
  }),
  email: joi.string().required().email({minDomainSegments: 2}).messages({
    "any.required": "Email is required",
    "string.empty": "Email is required",
    "string.email": "Enter a valid email like example@mail.com",
  }),
  password: joi.string()
                .required()
                .alphanum()
                .min(6)
                .message({
                'any.required': 'Please enter an alphanumeric password with min 6 characters',
             }),
});

module.exports = scheme;