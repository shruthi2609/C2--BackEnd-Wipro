const express=require("express")
const server=express()
const data=require("./data")
const path=require("path")
const bp=require("body-parser")
server.use(bp.json())
server.use("/index",express.static(path.join(__dirname,"public")))

server.get("/empDetails",(req,res)=>{
    
    res.send(JSON.stringify(data))
})

server.post("/empDetails",(req,res)=>{
    data.push(req.body)
    res.send("added")
})

server.listen(3001,()=>console.log("server started"))