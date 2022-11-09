let users = [
    {
     
        name: 'Ignacio',
        lastName: 'Borraz',
        photo: "https://media-exp1.licdn.com/dms/image/C4D03AQFvfAF10trKWg/profile-displayphoto-shrink_200_200/0/1637173137697?e=2147483647&v=beta&t=kMBjsE5A5-RY5PNJNoRR5nGd9pJCjbKuojBSTUB1bsw",
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
        photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Lionel_Messi_20180626_%28cropped%29.jpg',
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
        photo: "https://es.web.img2.acsta.net/pictures/19/10/16/01/22/0121805.jpg",
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
        photo: "https://www.mancity.com/meta/media/ptfh0hca/julian-alvarez.png",
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
    name: elemento.name,
    lastName: elemento.lastName,
    photo: elemento.photo,
    age: elemento.age,
    email: elemento.email,
    password: elemento.password,
    code: elemento.code,
    verified: elemento.verified,
    logged: elemento.logged,
})

})