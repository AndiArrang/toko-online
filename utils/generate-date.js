import { logger } from "../application/logging.js";

export const generateDate = () => {
    const dateNow = new Date()
    const localDate = dateNow.toLocaleString();
    return localDate.replace(/[^\w]/g, '');
}

// logger.warn(generateDate())
// console.log(generateDate())