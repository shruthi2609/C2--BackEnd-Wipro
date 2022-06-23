const express=require("express")
const server=express()
const path=require("path")
const hbs=require("hbs")
//server.set("view","./views")
server.set("view engine","hbs")

server.use("/index",express.static(path.join(__dirname,"public")))

server.get("/home",(req,res)=>{
    res.render("home",{username:"john",email:"john@gmail.com"})
})



server.listen(3001,()=>console.log("server started"))