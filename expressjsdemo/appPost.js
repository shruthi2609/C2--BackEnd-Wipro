const express=require("express")
const server=express()

const bp=require("body-parser")
//const jsonparser=bp.json()

server.use(bp.json())
server.use(bp.text())
server.use(bp.urlencoded({extended:true}))


server.get("/getcontacts",(req,res)=>{
    res.send("inside get contacts route")
})

server.post("/getcontacts",(req,res)=>{
    console.log(req.body)
    res.send("get contacts called")
})

server.post("/setcontacts",(req,res)=>{
    console.log(req.body)
    res.send("set contacts called")
})


server.post("/login",(req,res)=>{
    console.log(req.body)
    res.send("login backend is executed")
})

server.listen(3001,()=>console.log("server started"))