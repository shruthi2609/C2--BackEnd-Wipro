const express=require("express")
const server=express()
const cookieParser=require("cookie-parser")
server.use(cookieParser())
const sessions=require("express-session")
const { response } = require("express")
server.use(sessions(
    {
        secret:"jamesbond",
        cookie:{maxAge:90000},
        saveUninitialized:true,
        resave:false
    }
))


server.get("/signup/:email",(req,res)=>{
    if(req.params.email){
        req.session.useremail=req.params.email
        console.log(req.session)
        res.send("signup successful")
    }
    else{
        console.log("please eneter your email")
    } 
})

server.get("/search",(req,res)=>{
    console.log(req.cookies['connect.sid'])
    res.send("searched successfully")
})
server.listen(3001,()=>console.log("server started"))