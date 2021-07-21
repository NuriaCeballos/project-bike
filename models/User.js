const mongoose = require ('mongoose')
const {Schema} = mongoose
const bcrypt = require('bcrypt')

const schemaUser = new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,require:true},
    email: {type:String,require:true,index:true,unique:true},
    city:{type:String,require:true},
    password: {type:String,require:true},
    passwordrepeat: {type:String,require:true},

})

class User{

}

schemaUser.loadClass(User)
module.exports = mongoose.model('User',schemaUser)