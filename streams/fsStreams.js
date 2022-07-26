const {Readable}=require("stream")
const fs=require('fs')

const readStreamFs=fs.createReadStream('file1.txt',{highWaterMark:10})
let bytesRead=0
readStreamFs.setEncoding('UTF-8')
readStreamFs.on('data',(chunk)=>{
    console.log(chunk)
    bytesRead+=chunk.length
    console.log(bytesRead)
    if(bytesRead===750){
        readStreamFs.pause()
    }
    setTimeout(()=>readStreamFs.resume(),6000)
})

readStreamFs.on('close',()=>{
console.log("streams closed")
})