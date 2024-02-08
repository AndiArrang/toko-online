import { logger } from "../application/logging.js"
import web from "../application/web.js"
import supertest from "supertest"
import Category from "../models/category.js"

describe('POST /api/category', function () {
    afterEach(() => {
        Category.destroy({
            where: {
                name: 'sandal'
            }
        })
    })
    it('should can create category', async () => {
        const result = await supertest(web)
            .post('/api/category')
            .send({
                name: 'sandal'
            })
        logger.info(result.body)
        expect(result.status).toBe(200)
        expect(result.body.data.name).toBe('sandal')
    })
})