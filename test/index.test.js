const app = require ('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('GET /cities/:id', function(){
   
    it('get one city', function(done){
        let ejemplo = "636d39386f873da185c9a581"
        request(app)
            .get('/cities/' + ejemplo)
            .expect(res =>{           
                assert.typeOf(res.body.response, 'array', 'its array')
            })
            .end((error, res) => {
                if(error){
                    return done(error.message)
                }
                done()
            })
    })
    it('city length > 1', function(done){
        let ejemplo = "636d39386f873da185c9a581"
        request(app)
            .get('/cities/' + ejemplo)
            .expect(res =>{
                assert.lengthOf(res.body.response, 1)
            })
            .end((error, res) => {
                if(error){
                    return done(error)
                }
                done()
            })
    })
})
