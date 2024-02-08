import express from 'express'
import userController from '../controller/user-controller.js'
const publicAPi = express.Router()

publicAPi.post('/api/user/regist',userController.regist)
publicAPi.post('/api/user/login',userController.login)

export default publicAPi;