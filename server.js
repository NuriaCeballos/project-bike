require('dotenv').config()
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const PassportLocal = require('passport-local').Strategy
const express =require('express')
const app = express()
const rtCard= require ('./routers/rtCard')
const rtAdmin=require('./routers/rtAdmin')
let exphbs  = require('express-handlebars')
const cors = require ('cors')



// middlewares 
app.use(express.static(__dirname +'/public'))
app.use (express.urlencoded({extended:true}))// lee los datos enviados por un formulario
app.use (cors())
// app.use(cookieParser('mi ultra secreto'))
// app.use(session({
//     secret:'mi ultra secreto',
//     resave:true,
//     saveUninitialized:true
// }))

// app.use(passport.initialize())
// app.use(passport.session())
// passport.use(new PassportLocal(function(username,password,done){//done envia el resultado del proceso de autenticacion
    
//     if(username==="nuriamaker" && password==="12345678")
//     return done (null,{id:1, name:"Nuria"})
//     done(null,false)// no hay error pero no aparece el usuario con ese nombre

// }))

// //serializacion
// passport.serializeUser(function(user,done){
// done(null,user.id)
// })

// //user es {id:1, name:"Nuria"} el done lleva dos parametros null que es el error 
// // y el segundo parametro que lleva es el resultado de la serialización
// //deserializacion
// passport.deserializeUser(function(id,done){
//     done(null,{id:1, name:"Nuria"})// el id y name estarían en un caso real en la base de datos
// })

app.engine('.hbs', exphbs({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.get('/propuestas', (req, res)=>{
    res.render('card');
})

// app.get('/register',(req,res)=>{
//     res.render('register')
// })

// app.get('/', (req,res,next)=>{
//     // si iniciamos mostrar bienvenida
//    if (req.isAuthenticated())/* devuelve true si ya inicio sesion*/return next()// si no muestra lo siguienteque es
   
//    res.redirect("/login")// si no iniciamos reenviar a /login
// },(req, res,)=>{
//     res.render('card');
// })

// app.get('/login',(req,res)=>{
//     // mostrar el formumalario de login
//     res.render("login")
    
// })

// app.post('/login',passport.authenticate('local',{// recibir credenciales y iniciar sesión
//     successRedirect:"/",
//     failureRedirect:"/login"

// }))
    
   



// conexión a la base de datos

const conexion = require('./conexion')

conexion.on('error', console.error.bind(console, 'Error al conectar a mongo'))
conexion.once('open', () => console.log("Conexión con Mongo OK!!"))


app.use ('/card', rtCard)
app.use('/',rtAdmin)


app.listen(3001, (err)=>{
    if (err)console.log("Errores: ", err)
    console.log("Servidor del backend arracado en puerto 3001")
})