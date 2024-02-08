import express from 'express'
import userController from '../controller/user-controller.js'
import { authMidlleware } from '../middleware/auth-middleware.js'
const userApi = express.Router()

userApi.use(authMidlleware)
userApi.patch('/api/user',userController.update)

export default userApi;