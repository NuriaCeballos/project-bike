const express = require ('express')
const rtCard = express.Router()
const Card = ('/models/Card')


rtCard.get ('/rutas',(req,res)=>{
    res.render('rutas')
})

rtCard.get('/guardar',(req,res)=>{
    res.send("eso es guardar")
})

rtCard.post('/guardar',(req,res)=>{
    console.log(req.body)
    res.json({respuesta:'ok'})
})

module.exports=rtCard