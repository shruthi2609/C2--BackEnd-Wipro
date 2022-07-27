const fs=require("fs")
const writeStream=fs.createWriteStream("./file2.txt")

writeStream.write("this line 3")
writeStream.write("\n")
writeStream.write("this is line 4")
writeStream.write("\n")

writeStream.end()
writeStream.on('finish',()=>{
    console.log("file write has been completed")
})
