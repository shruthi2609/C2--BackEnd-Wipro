const express=require("express")
const server=express()
const bp=require("body-parser")
server.use(bp.json())

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
server.put("/update",(req,res)=>{
    const newdata=req.body
    memberdata=memberdata.filter((item)=>item.fname!==newdata.fname)
    memberdata.push(newdata)
    res.send(JSON.stringify(memberdata))
})

server.delete("/delete",(req,res)=>{
    const newdata=req.body
    memberdata=memberdata.filter((item)=>item.fname!==newdata.fname)
    res.send(JSON.stringify(memberdata))
})

server.get("/deleteuser/:fname",(req,res)=>{
    const newdata=req.params
    memberdata=memberdata.filter((item)=>item.fname!==newdata.fname)
    res.send(JSON.stringify(memberdata))
})

server.listen(3001,()=>console.log("server started"))