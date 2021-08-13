const mongoose = require('mongoose')
const {Schema} = mongoose


let schemaCard = new Schema({

    nickname: {type:String, required: true},
    // photo: {type: String, default:'/images/default.png'},
    title: {type: String, required:true},
    description: {type: String},
})

class Card{

}

schemaCard .loadClass(Card)
module.exports = mongoose.model('Card',schemaCard)