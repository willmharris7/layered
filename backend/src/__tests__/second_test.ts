const appTest = require('../server') // Link to your server file
const supertest = require('supertest')
const request = supertest(appTest)

it('gets the test endpoint', async () => {
    const response = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
})