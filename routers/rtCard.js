const express = require ('express')
const rtCard = express.Router()
const Card = ('/models/Card')


rtCard.get ('/rutas',(req,res)=>{
    res.render('rutas')
})

module.exports=rtCard