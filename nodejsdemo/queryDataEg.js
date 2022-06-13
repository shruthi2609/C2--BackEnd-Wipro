const http=require("http")
const { parse } = require("path")
const url=require("url")
const server=http.createServer((req,res)=>{
    
    const parsedurl=url.parse(req.url,true)
    console.log(parsedurl)
    const q1=parsedurl.query.country
    const q2=parsedurl.query.company
    if(parsedurl.pathname==="/search"&&req.method==="GET"){
        if(q1==="india"&&q2==="wipro"){
            res.writeHead(200,{
                "Content-Type":"application/json"
            })
            res.end(JSON.stringify({"username":"john","email":"john@gmail.com"}))
           
        }
        else{
            res.writeHead(200,{
                "Content-Type":"application/json"
            })
            res.end(JSON.stringify({"message":"no user found"}))
        }
      
    }
    else{
        res.end("no path hit")
    }
})
server.listen(3001,()=>console.log("server started"))