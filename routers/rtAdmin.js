const express = require ('express')
const rtAdmin = express.Router()
const Admin = require('../models/Admin')
const daoAdmin = require('../dao/daoAdmin')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const PassportLocal = require('passport-local').Strategy


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