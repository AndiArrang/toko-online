import { logger } from "../application/logging.js";
import Category from "../models/category.js";
import { createCategoryValidation } from "../validation/category-validation.js"
import validate from "../validation/validation.js"


export const createCategory = async (request) => {
    const category = validate(createCategoryValidation,request);
    logger.info(category)

    return Category.create({
        category_id: category.category_id,
        name: category.name
    })
}