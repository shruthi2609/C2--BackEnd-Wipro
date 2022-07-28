const express=require("express")
const app=express()
const morgan=require("morgan")
const fs=require("fs")
const writeStream=fs.createWriteStream('morganlog.log',{flags:'a'})
app.use(morgan('combined',{stream:writeStream}))

app.get("/home",(req,res)=>{
    res.status(200).send("home page is hit")
})
app.get("/dashboard",(req,res)=>{
    res.status(200).send("home page is hit")
})

app.listen(3001,()=>console.log("server started"))