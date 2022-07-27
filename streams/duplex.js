const fs=require("fs")
const readStream=fs.createReadStream("./file1.txt",{highWaterMark:30})
const writeStream=fs.createWriteStream("./file3.txt")
readStream.on('data',(chunk)=>{
writeStream.write(chunk.toString())
})
readStream.on('end',()=>{
    writeStream.end()
})
writeStream.on('finish',()=>{
    console.log("file is written")
})
