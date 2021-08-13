const Card = require('../models/Card')


const daoCard={}

daoCard.guardar = function save (datos){
    return new Promise ((resolved,reject)=>{
        let newcard = new Card(datos)
        newcard.save()
        resolved(newcard)
        console.log(newcard)
    })

}

module.exports=daoCard