const express=require('express')
const app=express()
const mydb=require('./db/mydb')
const data=require("./connect")
data.connectMongo()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home',async function (req, res) {
    let blog=new mydb({
      author:"abs",
      title:"lnod",
      body:"svkjb"

    })
    let data= await blog.save();
    res.send({answer : data})
  })
  



app.listen(3000,() =>{
    console.log('listening on port 3000');
})