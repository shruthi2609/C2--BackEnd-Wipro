const fs=require("fs")
const writeStream=fs.createWriteStream('mylog.log',{flags:'a'})
function loggerFunction(req,res,next){
    let url=req.url
    let method=req.method
    let currentDateTime=new Date()
    let formattedDateTime=currentDateTime.getFullYear()+"-"+(currentDateTime.getMonth()+1)+'-'+currentDateTime.getDate()+' '+currentDateTime.getHours()+':'+currentDateTime.getMinutes()+':'+currentDateTime.getSeconds()
    console.log(formattedDateTime)
    next()
    let statusCode=res.statusCode
    writeStream.write(url)
    writeStream.write(" ")
    writeStream.write(method)
    writeStream.write(" ")
    writeStream.write(String(statusCode))
    writeStream.write(" ")
    writeStream.write(formattedDateTime)
    writeStream.write("\n")
    }
    module.exports=loggerFunction