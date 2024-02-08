import { logger } from "../application/logging.js";
import { loginUser, registUser,updateUser } from "../service/user-service.js"


const regist = async (req,res,next) => {
    try {
        const user = await registUser(req.body);

        if(user) {
            res.status(200).json({
                data: user
            })
        }

    } catch (error) {
        next(error)
    }
}

const login = async (req,res,next) => {
    try {
        const token = await loginUser(req.body);
        logger.info(token)
        if(token) {
            res.status(200).json({
                data: {
                    token
                }
            })
        }

    } catch (error) {
        next(error)
    }
}

const update = async (req,res,next) => {
    try {
        const request = req.body
        request.username = req.user
        logger.info(request)
        const newUser = await updateUser(request);
        console.info('ini',newUser)
        if(newUser) {
            res.status(201).json({
                data: newUser
            })
        }

    } catch (error) {
        next(error)
    }
}

export default {
    regist,
    login,
    update
}