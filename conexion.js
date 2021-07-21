const mongoose=require ('mongoose')

// let data={
//     host=process.env.DB_HOST,
//     user=process.env.DB_USER,
//     pass=process.env.DB_PASS,
//     port=process.env.DB_PORT,
//     name=process.env.DB_NAME
// }

//mongoose.connect('mongodb://`${data.host}:${data.port}//${data.name}:{data.pass}`',{
    mongoose.connect('mongodb://localhost:27017/projecbike', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: false,
    useFindAndModify: true

})
module.exports=mongoose.connection