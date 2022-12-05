const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('GET /cities', function () {
    it('get all cities', function (done) {
        request(app)
            .get('/cities')
            .expect(res => {
                assert(Array.isArray([res.body.response]), 'cities found');
            })
            .end((error, res) => {
                if (error) {
                    return done(error)
                }
                done()
            })
    })
})
describe("DELETE /cities:id", function () {
    it('delete one city', function (done) {
        const id = '6384408f1969fbddf6fb6b9a'
        request(app)
            .delete(`/cities/${id}`)
            .expect(200)
            .end((error, res) => {
                if (error) {
                    return done(error)
                }
                done()
            })
    })
})