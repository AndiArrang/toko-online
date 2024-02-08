import { logger } from "../application/logging.js";
import { createCategory } from "../service/category-service.js"
import { generateDate } from "../utils/generate-date.js";


const create = async (req,res,next) => {
    try {
        const request = req.body;
        const id = `CTG${generateDate()}`;
        request.category_id = id
        const result = await createCategory(request)
        logger.info(result)
        
        if (result) {
            res.status(200).json({
                data: result
            })
        }
    } catch (error) {
        next(error)
    }
}


export default {
    create
}