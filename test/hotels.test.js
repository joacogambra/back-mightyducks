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
    describe('POST /api/hotels/', function () {

        it('The hotel was created successfully', function () {
            request(app)
                .post('/api/hotels/')
                .send({                 
                    "name": "Hotel Sheraton ",
                    "photo": ["https://www.hotelquirinale.it/data/2560/Hotel-Quirinale-Roma-ingresso.jpg"] ,
                    "capacity": 17000,
                    "cityId": "636c1f374828888e007ada20",
                    "userId": "636d2cd4a943744050f9ef13",
                })
                .expect(res=>{
                    
                    assert.equal(res.status==201, '201')
                })
                .end(function (error, res){
                    if (error) {
                        return done(error)
                    }
                    done()
                    })
                })
    
        })