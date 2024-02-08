import express from 'express';
import publicAPi from '../route/publicApi.js';
import adminAPI from '../route/adminAPI.js';
import userApi from '../route/userApi.js';
import 'dotenv/config.js'
import { errorMidlleware } from '../middleware/error-middleware.js';


const web = express();

web.use(express.json())
web.use(express.urlencoded({extended: true}));

web.use(publicAPi)
web.use(adminAPI)

web.use(userApi)
web.use(errorMidlleware)

export default web;

