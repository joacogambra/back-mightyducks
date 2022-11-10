let users = [
    {
        name: 'Ignacio',
        lastName: 'Borraz',
        role:"user",
        photo:"https://avatars.githubusercontent.com/u/95113020?v=4",
        age: 32,
        email: 'ignacioborraz@hotmail.com',
        password: 'Hola1234',
        code: 32,
        verified: true,
        logged: true,
    },
    {
        name: 'Lionel',
        lastName: 'Messi',
        role:"user",
        photo:"https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1",
        age: 35,
        email: 'leomessi10@hotmail.com',
        password: 'thiagociromateo',
        code: 10,
        verified: true,
        logged: true,
    },
    {
        name: 'Anne',
        lastName: 'Hathaway',
        role:"user",
        photo:"https://es.web.img2.acsta.net/pictures/19/10/16/01/22/0121805.jpg",
        age: 39,
        email: 'annehathaway@gmail.com',
        password: 'diariodeunaprincesa',
        code: 2000,
        verified: true,
        logged: true,
    },
    {
        name: 'Julian',
        lastName: 'Alvarez',
        role:"user",
        photo:"https://cdn.socy.cloud/PRAS/v1/_20/p/202206/upload/PRAS/uf_1654727957PD0AQwr15kapFkdiieXqae32Qt.jpg",
        age: 22,
        email: 'juli9@gmail.com',
        password: 'riverplate33',
        code: 9,
        verified: true,
        logged: true,
    }
]

require('dotenv').config()
require('../../config/database')
const User = require('../User')

users.forEach(e =>{
    User.create({
        name:e.name,
        lastName:e.lastName,
        role:e.role,
        photo:e.photo,
        age:e.age,
        email:e.email,
        password:e.password,
        code:e.code,
        verified:e.verified,
        logged:e.logged,
    })
})