import { logger } from "../application/logging.js"
import User from "../models/user.js"
import { loginUserValidation, registUserValidation,updateUserValidation } from "../validation/user-validation.js"
import validate from "../validation/validation.js"
import { ResponseError } from "../error/responseError.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"



export const registUser = async (request) => {
    const user = validate(registUserValidation,request)
    console.log(user)
    const countUser = await User.count({
        where: {
            username: user.username
        }
    })

    if (countUser === 1) {
        throw new ResponseError(400,'username is already exist !!!')
    }

    user.password = await bcrypt.hash(user.password,10);

    logger.info(user)
    const newUser = await User.create({
        username : user.username,
        password: user.password,
        email: user.email
    })
    
    delete newUser.dataValues.password;
    logger.info(newUser)
    return newUser
}

export const loginUser = async (request) => {
    const loginReq = validate(loginUserValidation,request);
    console.log(process.env.SECRET_KEY)
    const user = await User.findOne({
        where: {
            username: loginReq.username
        }
    })

    if(!user) {
        throw new ResponseError(400,'username or password wrong !!!')
    }

    const isPasswordValid = await bcrypt.compare(loginReq.password,user.password)
    if (!isPasswordValid) {
        throw new ResponseError(400,'username or password wrong !!!')
    }

    const payload = {
        username: user.username,
    }

    if(user.email) {
        payload.email = user.email
    }
    const token = jwt.sign(payload,process.env.SECRET_KEY,{expiresIn: '1h'})
    return token
}

export const updateUser = async (request) => {
    const user = validate(updateUserValidation,request);
    logger.info(user)
    const countUser = await User.count({
        where: {
            username: user.username
        }
    })
    if(countUser !== 1) {
        throw new ResponseError(404,"User Not Found")
    }

    const data = {}
    if (user.email) {
        data.email = user.email
    }
    if (user.password) {
        data.password = await bcrypt.hash(user.password,10) 
    }

    const newUser = await User.update(data,{
        where: {
            username: user.username
        }
    }).then(()=>{
        return User.findOne({
            where: {
                username: user.username
            },
            attributes: ['username','email']
       })
    })

    return newUser.dataValues
}