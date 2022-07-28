const express=require("express")
const app=express()

const loggerFunction=require("./middlewares/logger")
app.use(loggerFunction)
app.get("/home",(req,res)=>{
    res.status(200).send("home page is hit")
})
app.get("/dashboard",(req,res)=>{
    res.status(200).send("home page is hit")
})

app.listen(3001,()=>console.log("server started"))