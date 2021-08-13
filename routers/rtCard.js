const express = require ('express')
const rtCard = express.Router()
const Card = require('../models/Card')
const daoCard = require('../dao/daoCard')


rtCard.get ('/rutas',(req,res)=>{
    res.render('rutas')
})

rtCard.get('/guardar',(req,res)=>{
    res.send("eso es guardar")
})

rtCard.post('/guardar',(req,res)=>{
    daoCard.guardar(req.body)
    .then(resp=>{
        console.log ("datos guardados")
    })
    
})

module.exports=rtCard