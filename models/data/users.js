let users=[{
    name: "Eric",
    lastName: "Rodriguez",
    role:"adm",
    photo:"https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg",
    age: 23,
    email: "feric.rodriguez@gmail.com",
    password: "Chau6789",
    code: "ryovxw2v",
    verified: true, 
    logged: true,

},
{
    name: "Laila",
    lastName: "Jalil",
    role: "adm",
    photo: "https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg",
    age: 36,
    email: "lailajalil@gmail.com",
    password: "Aprobado2",
    code: "aj7h57ow",
    verified: true, 
    logged: true,

},
{  
    name: "Joaquin",
    lastName: "Gambra",
    role: "adm",
    photo:"https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg",
    age: 24,
    email: "joaquingambra@gmail.com",
    password: "Aprobado1",
    code: "agkuu4yy",
    verified: true, 
    logged: true,
},
{

    name: "Juan",
    lastName: "Perez",
    role: "adm",
    photo:"https://i.pinimg.com/474x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg",
    age: 40,
    email: "feric.rodriguez@gmail.com",
    password: "Chau1234",
    code: "w8b6y3m2",
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