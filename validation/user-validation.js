import Joi from "joi";

const registUserValidation = Joi.object({
    username: Joi.string().max(45).required(),
    password: Joi.string().max(45).required(),
    email: Joi.string().email().optional(),
})

const loginUserValidation = Joi.object({
    username: Joi.string().max(45).required(),
    password: Joi.string().max(45).required(),
})

const updateUserValidation = Joi.object({
    username: Joi.string().max(45).required(),
    password: Joi.string().max(45).optional(),
    email: Joi.string().email().optional(),
})


export {
    registUserValidation,
    loginUserValidation,
    updateUserValidation
}