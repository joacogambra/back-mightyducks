const app = require ('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')



describe('GET /api/hotels/?name=', function () {

    it('404 hotel not found with filter', function () {
        request(app)
            .get('/api/hotels/?name=rgzg')
            .expect(res=>{
                assert.equal(res.status==404, '404')
            })
            .end(function (error, res){
                if (error) {
                    return done(error)
                }
                done()
                })
            })

    })
