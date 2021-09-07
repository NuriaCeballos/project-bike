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
const fileUpload = require('express-fileupload')


// middlewares 
app.use(express.static(__dirname +'/public'))
app.use (express.urlencoded({extended:true}))// lee los datos enviados por un formulario
app.use (cors())
app.use(express.json())


app.engine('.hbs', exphbs({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.get('/propuestas', (req, res)=>{
    res.render('card');
})


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