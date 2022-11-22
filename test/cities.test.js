const app = require ('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('GET /cities', function(){
    it('get all cities', function(done){
        request(app)
            .get('/cities')
            .expect(res =>{
                assert(Array.isObject([res.body.response]), 'cities found');
            })
            .end((error, res) => {
                if(error){
                    console.log(res);
                    return done(error)
                }
                 done()
            }) 
    })
})

describe('POST /cities',function(){
    it('name is a string',function (done){
        request(app)
            .post('/cities')
            .expect(res =>{
                assert.isString(res.name)
            })
            .end((error, res) => {
                if(error){
                    console.log(res);
                    return done(error)
                }
                done()
            }) 
    })
    it("400 bad request"), function (done) {
      request(app)
        .post('/cities')
        .expect(res => {
          assert.isString(res.name)
        })
        .end((error, res) => {
            if(error){
                console.log(res);
                return done(error)
            }
            done()
        }) 
    }
})