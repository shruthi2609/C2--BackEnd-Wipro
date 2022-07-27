const {Writable}=require("stream")
class MyWriteableStream extends Writable{
_write(chunk,enc,next){
data.push(chunk)
next()
}
}
const data=[]
const writeObj=new MyWriteableStream(data)

writeObj.write("some data is wrritted to the write stream")
writeObj.write('/n')
console.log(writeObj.write("some data is written"))
writeObj.end()
writeObj.on('finish',()=>{
    console.log("finished the write stream",data.toString())
})
