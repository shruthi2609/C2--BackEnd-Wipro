const express=require("express")
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const fs=require("fs")
let memberdata=[
    {
        fname:"peter",
        country:"india",
        place:"chennai",
        password:"pass123"
    },
    {
        fname:"john",
        country:"us",
        place:"texas",
        password:"pass123"
    },
    {
        fname:"henry",
        country:"india",
        place:"mumbai",
        password:"pass123"
    },
    {
        fname:"mary",
        country:"india",
        place:"chennai",
        password:"pass123"
    },

]
server.get("/search",(req,res)=>{
    const searchdata=req.query
    const result=memberdata.filter((item)=>item.country===searchdata.country&&item.place===searchdata.place)
    res.send(JSON.stringify(result))
})

server.get("/user/routev2",(req,res)=>{
    res.send("dummy")
})

server.get("/user/:username/:place",(req,res)=>{
    const searchdata=req.params
    const result=memberdata.filter((item)=>item.fname===searchdata.username&&item.place===searchdata.place)
    res.send(JSON.stringify(result))
})



server.post("/login",(req,res)=>{
const cred=req.body
const result=memberdata.find((item)=>item.fname===cred.fname)
if(result)
{
if(result.password===cred.password){
    res.send(JSON.stringify({msg:"login successfull"})) 
}
else{
    res.send(JSON.stringify({msg:"login not successfull"})) 
}}
else{
    res.send(JSON.stringify({msg:"user does not exits"}))
}
})

server.post("/create",(req,res)=>{
    const cred=req.body
    memberdata.push({
        fname:cred.fname,
        country:cred.country,
        place:cred.place,
        password:cred.password
    })
    fs.writeFile("./userData.txt",cred.fname,(err)=>{
        if(err){
            console.log(err)
            res.send("error in creation ")
        }
    })
    res.send("created successfully")
})


server.listen(3001,()=>console.log("server started"))