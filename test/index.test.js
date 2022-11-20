const app = require ('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

//creamos un grupo, agreupa test cases
describe('GET /cities/:id', function(){
    // it - test cases
    it('get one city', function(done){
        let ejemplo = "636d39386f873da185c9a581"
        request(app)
            .get('/cities/' + ejemplo)
            .expect(res =>{
                // assert = afirmar, no es encadenable
                assert.typeOf(res.body.response, 'array', 'its array')//value,name,message
            })
            .end((error, res) => {
                if(error){
                    console.log(res);
                    return done(error)
                }
                return done()
            })
    })
    it('city length > 1', function(done){
        let ejemplo = "636d39386f873da185c9a581"
        request(app)
            .get('/cities/' + ejemplo)
            .expect(res =>{
                assert.lengthOf(res.body.response, 1)//value,name
            })
            .end((error, res) => {
                if(error){
                    console.log(res);
                    return done(error)
                }
                return done()
            })
    })
    // it('error cant get city', function(){})
})
