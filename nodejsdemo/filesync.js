const fs=require("fs")
try{
    const data=fs.readFileSync("./userDetails.json",'utf-8')
    console.log(JSON.parse(data))
}
catch(err){
    console.log(err)
}

//write the file
const data={username:"henry",email:"henry@gmail.com"}
fs.writeFileSync("./userDetails.json",JSON.stringify(data))

//append the daata
const appenddata=`\nthis is a new line`
fs.appendFileSync("./file4.txt",appenddata)






/* read data with async

fs.readFile("./file1.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})*/

/*const data2=fs.readFileSync("./file2.txt",'utf-8')
console.log(data2)*/
