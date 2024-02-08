import Joi from "joi";

const createCategoryValidation = Joi.object({
    category_id: Joi.string().required(),
    name: Joi.string().max(45).required()
})
   
export {
    createCategoryValidation
}