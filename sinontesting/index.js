const express=require("express")
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const mongoose=require("mongoose")
const ContactManagerRoute=require("./routes/ContactManagerRoutes")
mongoose.connect("mongodb://localhost:27017/c2sinon").then((res)=>console.log("connected to db")).catch((err)=>console.log(err))

server.use("/",ContactManagerRoute)

server.listen(3001,()=>console.log("server started"))


