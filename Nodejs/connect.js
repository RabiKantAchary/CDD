const mongoose =require("mongoose")
const connectionString="mongodb+srv://Rabikant:Achary@cluster0.uf8gkhg.mongodb.net/"
module.exports.connectMongo = function(){
    mongoose
    .connect(connectionString,{})
    .then(()=>{
        console.log("Connected to mongo")
    })
    .catch(()=>{
        console.log(err)
    })
}