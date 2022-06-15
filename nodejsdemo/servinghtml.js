const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url==="/index"&&req.method==="GET"){
        fs.readFile("./public/index.html",'utf-8',(err,data)=>{
            if(err){
                console.log(err)
                res.writeHead(404,{'Content-Type':'text/html'})
                res.end("some err occured in reading the file")
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(data)
            }
        })
    }
    if(req.url==="/contact"&&req.method==="GET"){
        console.log("url is hit")
        res.write("this is contact page")
        res.end()
    }
})
server.listen(3001,()=>console.log("server started"))