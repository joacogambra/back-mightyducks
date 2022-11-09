let adms=[{
   
    name: "Eric",
    lastName: "Rodriguez",
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
const Adm= require('../Adm')
adms.forEach(elemento =>{
    Adm.create({
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