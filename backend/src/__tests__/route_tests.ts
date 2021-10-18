const appTest = require('../server') // Link to your server file
const supertest = require('supertest')
const request = supertest(appTest)



describe('Test endpoints', function() {

    it('/hello', async () => {
        const response = await request.get('/api/hello')
        expect(response.status).toBe(200)
        expect(response.body.express).toBe('Hello From Express')
    })

    it('/world', async () => {
        request.post('/api/world')
        .send({name: 'john'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end()
    })
})