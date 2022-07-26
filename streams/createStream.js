const {Readable}=require("stream")
const data=[
    "node js",
    "react js",
    "express js"
]


//stream object -> custom class extends Readable

class MyStream extends Readable{
constructor(data){
    super()
    this.data=data
    this.index=0
}
_read(){
    if(this.index<this.data.length){
        let chunk=this.data[this.index]
        this.push(chunk)
        this.index+=1
    }
    else{
        this.push(null)
    }
}
}

const readObj=new MyStream(data)
const readobj2=new MyStream([128,8283923,9283892])

readObj.setEncoding('UTF-8')

let streamdata=''
//flowing mode
readObj.on('data',(chunk)=>{
    console.log(`${chunk.length}`)
streamdata+=chunk
})

readObj.on('end',()=>{
  console.log(streamdata)
})

readObj.on('close',()=>{
    console.log("streams closed")
})

readObj.on('error',(err)=>{
    console.log('error')
})
