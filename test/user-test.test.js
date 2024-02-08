
import { logger } from "../application/logging.js"
import web from "../application/web.js"
import supertest from "supertest"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { createUserTest, deleteUserTest ,getUserTest } from "./test-utils.js"


// User regist test
describe('POST /api/user/regist', function () {
    afterEach(async () => {
        await deleteUserTest()
    })
    it('should can regist user', async () => {
        const result = await supertest(web)
            .post('/api/user/regist')
            .send({
                username: 'test',
                password: 'rahasia',
                email: 'user123@gmail.com'
            })
        logger.info(result.body)
        expect(result.status).toBe(200)
        expect(result.body.data.username).toBe('test')
    })
    
    it('should reject if username is already exist !', async () => {
        const result = await supertest(web)
            .post('/api/user/regist')
            .send({
                username: 'testing',
                password: 'rahasia',
                email: 'user123@gmail.com'
            })
        logger.info(result.body)
        expect(result.status).toBe(400)
    })
})


// User login test

describe('POST /api/user/login', function () {
    beforeEach( async () => {
        await createUserTest()
    })
    afterEach(() => {
        deleteUserTest()
    })
    it('should can login user', async () => {
        const result = await supertest(web)
            .post('/api/user/login')
            .send({
                username: 'test',
                password: 'rahasia',
            })
            const data = jwt.verify(result.body.data.token,process.env.SECRET_KEY)
            console.log('ini:',data)
        logger.info(result.body)
        expect(result.status).toBe(200)
        expect(result.body.data.token).toBeDefined()
    })
    
    it('should reject if username or pass wrong !', async () => {
        const result = await supertest(web)
            .post('/api/user/login')
            .send({
                username: 'testi',
                password: 'rahasia',
            })
        logger.info(result.body.errors)
        expect(result.status).toBe(400)
        expect(result.body.errors).toBeDefined()
    })
})


// User update test
describe('PATCH /api/user', function () {
    beforeEach( async () => {
        await createUserTest()
    })
    afterEach(() => {
        deleteUserTest()
    })
    it('should can update user', async () => {
        const token = jwt.sign({ username: 'test',email: 'email@gmail.com'},process.env.SECRET_KEY,{expiresIn: '1h'})
        const result = await supertest(web)
            .patch('/api/user')
            .set('Authorization',token)
            .send({
                password: 'newPass',
                email: 'newemail@gmail.com'
            })
        logger.info(result.body.data)
        expect(result.body.data.email).toBe('newemail@gmail.com')

        const user = await getUserTest()
        expect(await bcrypt.compare('newPass',user.password)).toBe(true)
    })
    
    // it('should reject if username or pass wrong !', async () => {
    //     const result = await supertest(web)
    //         .post('/api/user/login')
    //         .send({
    //             username: 'testii',
    //             password: 'rahasia',
    //         })
    //     logger.info(result.body.errors)
    //     expect(result.status).toBe(400)
    //     expect(result.body.errors).toBeDefined()
    // })
})