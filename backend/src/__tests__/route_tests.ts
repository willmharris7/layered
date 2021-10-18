const appTest = require('../server') // Link to your server file
const supertest = require('supertest')
const request = supertest(appTest)


describe('Test endpoints', function() {

    it('returns "Hello From Express" from /api/hello', async () => {
        const response = await request.get('/api/hello')
        expect(response.status).toBe(200)
        expect(response.body.express).toBe('Hello From Express')
    })

    it('returns the request message body from /api/world', async () => {
        const response = await request
            .post('/api/world')
            .send({name: 'john'})
            .set('Accept', 'application/json')
        expect(response.status).toBe(200)
        expect(response.body.express).toBe('I received your POST request. This is what you sent me: john')
    })

    it('returns the list of databases from MonboDB Atlas', async () => {
        const response = await request.get('/api/dbs')
        expect(response.status).toBe(200)
        console.log(response.body.express)
        expect(response.body.express).toStrictEqual([
            'sample_airbnb',
            'sample_analytics',
            'sample_geospatial',
            'sample_mflix',
            'sample_restaurants',
            'sample_supplies',
            'sample_training',
            'sample_weatherdata',
            'admin',
            'local'
        ])
    })
})



//   [
//     'Ribeira Charming Duplex has 3 bedrooms',
//     'Horto flat with small garden has 1 bedrooms',
//     'Ocean View Waikiki Marina w/prkg has 1 bedrooms',
//     'Private Room in Bushwick has 1 bedrooms',
//     'Apt Linda Vista Lagoa - Rio has 1 bedrooms'
//   ]
//   [
//     'Ribeira Charming Duplex has 3 bedrooms',
//     '3 chambres au coeur du Plateau has 3 bedrooms',
//     'Apartamento zona sul do RJ has 3 bedrooms',
//     'Large railroad style 3 bedroom apt in Manhattan! has 3 bedrooms',
//     'Cozy aptartment in Recreio (near Olympic Venues) has 3 bedrooms'
//   ]


