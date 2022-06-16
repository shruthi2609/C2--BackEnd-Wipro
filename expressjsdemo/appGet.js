const express=require("express")
const server=express()


//server.get("/",(req,res)=>{
    //dont use writeHead + res.send
    // writeHead + res.end or res.write will work
   /* res.writeHead(200,{'Content-Type':'application/json'})
    res.send("<h1>heading</h1>")*/
   /* res.status(200).send("hello js")
})

server.get("/contact",(req,res)=>{
    const memberdata={
        fname:"john",
        email:"john@gmail.com"
    }
    res.status(200).send(JSON.stringify(memberdata))
})

server.all("*",(req,res)=>{
    res.status(404).send("<h1>Page not Found </h1>")
})*/


const app=server.listen(3001,()=>{
   /* console.log(app.address().address)
    console.log(app.address().port)
    console.log(app.address().family)*/
    console.log(`the server is up in port no ${app.address().port}`)
})
