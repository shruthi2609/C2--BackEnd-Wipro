const express=require("express")
const app=express()
const bp=require("body-parser")
app.use(bp.json())
const MongoClient=require("mongodb").MongoClient
const url="mongodb://localhost:27017"
const client=new MongoClient(url)

async function main(){
await client.connect()
console.log("connected")
const db=client.db("c2mern")
const collection=db.collection("c2merngrades")

app.get("/getdata",async (req,res)=>{
  const data= await collection.find({}).toArray()
  res.send(data)
})

app.post("/createuser",async (req,res)=>{
    const reqdata=req.body
    const result=await collection.insertOne(reqdata)
    console.log(result)
    if(result){
        res.send("inserted")
    }
    else{
        res.send("not inserted")
    }
})



}
main()
app.listen(3001,()=>console.log("sevrer started"))

