import { ResponseError } from "../error/responseError.js";

const validate = (schema,request) => {
    const result = schema.validate(request)

    if (result.error) {
        throw new ResponseError(400,error.messsage)
    } else {
        return result.value
    }
}

export default validate;