const { application } = require("express")
const express=require("express")
const server=express()
server.use(logger)
const morgan=require("morgan")
server.use(morgan('tiny'))
const bp=require("body-parser")
//const jsonparser=bp.json()

server.use(bp.json())
server.get("/home",(req,res)=>{
    res.send("home page")
})
server.get("/service",(req,res)=>{
    res.send("service page")
})

server.post("/login",authorize,(req,res)=>{
    console.log(req.admin)
    if(req.admin){
        res.send("success")
    }
   
})
function logger(req,res,next){
console.log(`${new Date().toString()} : url - ${req.url} `)
next()
}

function authorize(req,res,next){
const data=req.body
if(data.uname==="admin"&data.password==="admin123"){
    req.admin=true
    next()
    return
}
    res.send("authorization failed")

}

server.listen(3001,()=>console.log("started"))