const express = require ('express')
const rtAdmin = express.Router()
const Admin = require('../models/Admin')
const daoAdmin = require('../dao/daoAdmin')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const PassportLocal = require('passport-local').Strategy


rtAdmin.use(cookieParser('mi ultra secreto'))
rtAdmin.use(session({
    secret:'mi ultra secreto',
    resave:true,
    saveUninitialized:true
}))

rtAdmin.use(passport.initialize())
rtAdmin.use(passport.session())
passport.use(new PassportLocal(function(username,password,done){//done envia el resultado del proceso de autenticacion
    
    if(username==="admin" && password==="admin")
    return done (null,{id:1, name:"Nuria"})
    done(null,false)// no hay error pero no aparece el usuario con ese nombre

}))

//serializacion
passport.serializeUser(function(user,done){
done(null,user.id)
})

//user es {id:1, name:"Nuria"} el done lleva dos parametros null que es el error 
// y el segundo parametro que lleva es el resultado de la serialización
//deserializacion
passport.deserializeUser(function(id,done){
    done(null,{id:1, name:"Nuria"})// el id y name estarían en un caso real en la base de datos
})


rtAdmin.use(passport.initialize())


rtAdmin.get('/', (req,res,next)=>{
    // si iniciamos mostrar bienvenida
   if (req.isAuthenticated())/* devuelve true si ya inicio sesion*/return next()// si no muestra lo siguienteque es
   
   res.redirect("/login")// si no iniciamos reenviar a /login
},(req, res,)=>{
    res.render('card');
})

rtAdmin.get('/login',(req,res)=>{
    // mostrar el formumalario de login
    res.render("login")
    
})

rtAdmin.get('/register',(req,res)=>{
    res.render('register')
})

rtAdmin.post('/login',passport.authenticate('local',{// recibir credenciales y iniciar sesión
    successRedirect:"/",
    failureRedirect:"/register"

}))



module.exports = rtAdmin