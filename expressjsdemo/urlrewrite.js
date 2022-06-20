const express=require("express")
const server=express()
const bp=require("body-parser")
//const jsonparser=bp.json()

server.use(bp.json())

server.get("/getData/:fname",(req,res,next)=>{
   // res.redirect("/getDetails")
   console.log("data",req.params)
   req.url=`/getDetails/${req.params.fname}`
   next()
})
server.get("/getDetails/:fname",(req,res)=>{
    console.log("details",req.params)
    res.send("dummy")
})

server.get("/search",(req,res,next)=>{
    req.url=`/find?country=${req.query.country}`
    next()

})
server.get("/find",(req,res)=>{
    console.log(req.query)
    res.send("dummy")
})

server.post("/create",(req,res,next)=>{
    req.url="/add"
    next()
})

server.post("/add",(req,res)=>{
console.log(req.body)
res.send("dummy")
})


server.listen(3001,()=>console.log("server started"))