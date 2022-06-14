const fs=require("fs")
fs.readFile("./file6.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    setTimeout(()=>console.log(data),5000)
})
fs.readFile("./file5.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
   console.log(data)
})
/*const data="this is from write"
fs.writeFile("./file5.txt",data,(err)=>{
    if(err){
        console.log(err)
    }
})

const appenddata="this is from append"
fs.appendFile("./file5.txt",appenddata,(err)=>{
    if(err){
        console.log(err)
    }
})*/