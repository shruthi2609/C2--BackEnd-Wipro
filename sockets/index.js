const express=require("express")
const app=express()
const httpServer=require("http")
const http=httpServer.Server(app)
const socket=require("socket.io")
const io=socket(http)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

io.on('connection',(socket)=>{
console.log("client connected")
setTimeout(()=>{socket.send("check out our offers ! ending soon ... ")},5000)
setTimeout(()=>{socket.send("reminder!")},8000)

socket.emit('advertisement',{msg:"Buy 1 get 1 free"})

setInterval(()=>{
let datetime=new Date()
socket.emit('deals',{timeleft:datetime.getSeconds()})
},1000)

socket.on('clientevent',(data)=>{
    console.log(data)
})
socket.on('disconnect',()=>{
    console.log("user disconnected")
})
})





http.listen(3001,()=>{
    console.log("socket server is running....")
})




