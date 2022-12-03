let users=[{

    _id:('636d2cd4a943744050f9ef13'),
    name: "Eric",
    lastName: "Rodriguez",
    role:"admin",
    photo:"https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg",
    age: 23,
    email: "feric.rodriguez@gmail.com",
    password: "Chau6789",
    code: "ryovxw2v",
    verified: false, 
    logged: false,

},
{   _id:('636d2cd4a943744050f9ef14'),
    name: "Laila",
    lastName: "Jalil",
    role: "admin",
    photo: "https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg",
    age: 36,
    email: "lailajalil@gmail.com",
    password: "Aprobado2",
    code: "aj7h57ow",
    verified: false, 
    logged: false,

},
{  
    _id:('636d2cd4a943744050f9ef15'),
    name: "Joaquin",
    lastName: "Gambra",
    role: "admin",
    photo:"https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg",
    age: 24,
    email: "joaquingambra@gmail.com",
    password: "Aprobado1",
    code: "agkuu4yy",
    verified: false, 
    logged: false,
},
{
    _id:('636d2cd4a943744050f9ef16'),
    name: "Juan",
    lastName: "Perez",
    role: "admin",
    photo:"https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg",
    age: 40,
    email: "feric.rodriguez@gmail.com",
    password: "Chau1234",
    code: "w8b6y3m2",
    verified: false, 
    logged: false,

}

]
require('dotenv').config()
require('.')
const User= require('../../models/User')
users.forEach(elemento =>{
    User.create({
    name: elemento.name,
    lastName: elemento.lastName,
    role: elemento.role,
    photo: elemento.photo,
    age: elemento.age,
    email: elemento.email,
    password: elemento.password,
    code: elemento.code,
    verified: elemento.verified,
    logged: elemento.logged,
})

})