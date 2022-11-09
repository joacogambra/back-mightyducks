let users = [
    {
     
        name: 'Ignacio',
        lastName: 'Borraz',
        age: 32,
        email: 'ignacioborraz@hotmail.com',
        password: 'Hola1234',
        code: 32,//'cualquier-codigo-aleatorio'
        verified: true,
        logged: true,
    },
    {
   
        name: 'Lionel',
        lastName: 'Messi',
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
const User= require('../User')
users.forEach(elemento =>{
    User.create({
    id: elemento.id,
    name: elemento.name,
    lastName: elemento.lastName,
    age: elemento.age,
    email: elemento.email,
    password: elemento.password,
    code: elemento.code,
    verified: elemento.verified,
    logged: elemento.logged,
})

})