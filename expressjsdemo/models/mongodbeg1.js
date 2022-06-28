const MongoClient=require("mongodb").MongoClient
const url="mongodb://localhost:27017"
/*MongoClient.connect(url).then((res)=>console.log("connected")).catch((err)=>console.log("not connected"))*/
MongoClient.connect(url,(err,db)=>{
    if(err){
        throw err
    }
    else{
        console.log("connected successfully")
        const c2mern=db.db("c2mern")
        c2mern.createCollection("c2merngrades1",(err,data)=>{
            if(err){
                throw err
            }
            else{
                console.log(data)
                console.log("created collection")
            }
        })
    }

})

