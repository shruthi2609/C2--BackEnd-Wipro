const express=require("express")
const server=express()

server.get(/\/*get$/,(req,res)=>{
    res.send("dummy")
})

server.get(/\/[a-z]+car$/,(req,res)=>{
    res.send("car route")
})

server.get(/\/[a-z0-9]{4,7}cake/,(req,res)=>{
    res.send("cakes route")
})

server.get(/\/user|users|member/,(req,res)=>{
    res.send("user details received")
})

server.get(/\/^(?!route).[a-zA-Z0-9$.]+@[a-zA-Z_]+.[a-z]{2,3}$/,(req,res)=>{
    res.send("email accepted")
})

server.get("/route/:email([a-zA-Z0-9$.]+@[a-zA-Z_]+.[a-z]{2,3}$)/:username([a-z]{4,10})",(req,res)=>{
    res.send(`recevied ${req.params.email}`)
    
})





server.all("*",(req,res)=>{
    res.send("page not found")
})

server.listen(3001,()=>console.log("server started"))