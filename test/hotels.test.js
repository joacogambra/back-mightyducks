const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')


describe('POST /api/hotels/', function () {
  it('The hotel was created successfully', function (done) {
    request(app)
      .post('/api/hotels/')
      .send({
        "name": "Hotel Sheraton ",
        "photo": "https://www.hotelquirinale.it/data/2560/Hotel-Quirinale-Roma-ingresso.jpg",
        "capacity": 17000,
        "cityId": "636c1f374828888e007ada20",
        "userId": "636d2cd4a943744050f9ef13",
      })
      .expect(res => {

        assert.equal(res.status == 201, '201')
      })
      .end(function (error, res) {
        if (error) {
          return done(error)
        }
        done()
      })
  })
})
describe("PATCH,/api/hotels/", function () {
  it("Update exitoso ", function (done) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgyMWI2M2U5ZDgyMDllZDgwMTk4YmEiLCJuYW1lIjoiUGVwZSIsImxhc3ROYW1lIjoiUHJ1ZWJhIiwicGhvdG8iOiJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NRRVVHR1dNV2R1S2xUbVV0Tk5VeHpzNTBNNm1JZGdwY05haHcmdXNxcD1DQVUiLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTYxNjkyMSwiZXhwIjoxNjY5NzAzMzIxfQ.sphEkvLyb3FRc7hck2Suof2lHn2UpenE3-Ooxgprm_Y"
    request(app)
      .patch("/api/hotels/636c491ec1f6efc7a7e0e992")
      .send({
        "name": "Hotel updated",
      })
      .auth(token, { type: "bearer" })
      .expect((response) => {
        assert.equal(response.status, 200);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
describe("DELETE,/api/hotels/", function () {
  it("Borrado", function (done) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgyMWI2M2U5ZDgyMDllZDgwMTk4YmEiLCJuYW1lIjoiUGVwZSIsImxhc3ROYW1lIjoiUHJ1ZWJhIiwicGhvdG8iOiJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NRRVVHR1dNV2R1S2xUbVV0Tk5VeHpzNTBNNm1JZGdwY05haHcmdXNxcD1DQVUiLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTYxNjkyMSwiZXhwIjoxNjY5NzAzMzIxfQ.sphEkvLyb3FRc7hck2Suof2lHn2UpenE3-Ooxgprm_Y"
    request(app)
      .patch("/api/shows/63840fb96f9c03f3204a0812")
      .send({
        "name": "Hotel deleted",
      })
      .auth(token, { type: "bearer" })
      .expect((response) => {
        assert.equal(response.status, 200);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
