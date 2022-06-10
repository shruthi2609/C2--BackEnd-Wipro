const http=require("http")
const memberData=require("./data/userData")
const createData=[]
const server=http.createServer((req,res)=>{
if(req.url==="/"&&req.method==="GET"){
    res.writeHead(200,{
        "Content-Type":"application/json"
    })
    res.end(JSON.stringify(memberData))
}
else if(req.url==="/admin"&&req.method==="GET"){
    res.writeHead(200,{
        "Content-Type":"text/html"
    })
    res.end("<h1>Admin Page</h1>")
}
else if(req.url==="/create"&&req.method==="POST"){
    let reqdata=""
req.on("data",(chunk)=>{
    console.log("data start")
reqdata+=chunk.toString()
})
req.on("end",()=>{
    console.log("data end")
    createData.push(JSON.parse(reqdata))
    console.log(createData)
})
req.on("close",()=>{
    console.log("close")
})
res.end("succesfully created")

}
else{
    res.writeHead(404,{
        "Content-Type":"text/html"
    })
    res.end("<h1>Page not Found</h1>")
}
})
server.listen(3001,()=>console.log("server is up : 3001"))
