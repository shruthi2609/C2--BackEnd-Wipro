const express=require("express")
const server=express()
const cookieParser=require("cookie-parser")
server.use(cookieParser())

server.get("/signup/:username",(req,res)=>{
res.cookie("userinfo",req.params.username,{maxAge:600000})
res.send("details found")
})

server.get("/search",authorize,(req,res)=>{

    res.send("searched")
})

server.get("/logout",(req,res)=>{
    res.clearCookie("userinfo",req.cookies['userinfo'])
    res.send("done")
})
function authorize(req,res,next){
   if(req.cookies['userinfo']){
    next()
   }
   else{
    res.send("please login")
   }
}

server.listen(3001,()=>console.log("started"))