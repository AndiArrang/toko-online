import express from 'express'
import categoryController from '../controller/category-controller.js'

const adminAPI = express.Router()

adminAPI.post('/api/category',categoryController.create)

export default adminAPI;