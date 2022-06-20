const express=require("express")
const server=express()
const getRoutes=require("./api/getRoutes")
const postRoutes=require("./api/postRoutes")
server.use("/user",getRoutes)
server.use(postRoutes)

server.listen(3001,()=>console.log("server started"))