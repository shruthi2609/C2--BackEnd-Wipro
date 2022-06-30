const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/contactsdb").then((res)=>console.log("db is connected")).catch((err)=>console.log("error in connection"))
const schema=mongoose.Schema
const contactsSchema=new schema({
    userid:{
        type:Number,
        unique:true,
        required:true
    },
    fname:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    role:String
})



const contactsModel=mongoose.model("contact",contactsSchema)

/*const document1=new contactsModel({
    userid:0,
    fname:"peter",
    email:"peter@gmail.com",
    role:"admin"
})
document1.save().then((res)=>console.log("inserted record successfully")).catch((err)=>console.log("error in create"))

const document2=new contactsModel({
    userid:1,
    fname:"john",
    phone:283238,
    email:"john@gmail.com"
})
document2.save().then((res)=>console.log("inserted record successfully")).catch((err)=>console.log("error in create"))

*/
//delete

/*contactsModel.findByIdAndDelete("62bda337b220e79498d6b9d5").then((res)=>console.log(res)).catch((err)=>console.log(err))

contactsModel.deleteOne({userid:2}).then((res)=>console.log(res)).catch((err)=>console.log(err))

contactsModel.deleteMany({userid:{$gte:0,$lte:2}}).then((res)=>console.log(res)).catch((err)=>console.log(err))*/



//read operation

/*contactsModel.find({userid:{$gte:0,$lte:2}},{email:1,userid:1}).then((response)=>console.log(response)).catch((err)=>console.log(err))

contactsModel.find({userid:2,email:"helen@gmail.com"},{email:1,userid:1}).then((response)=>console.log(response)).catch((err)=>console.log(err))


contactsModel.findById("62bda337b220e79498d6b9d6").then((response)=>console.log(response)).catch((err)=>console.log(err))*/

// update

/*contactsModel.findByIdAndUpdate("62bda337b220e79498d6b9d6",{fname:"helen mary",email:"helenmary@gmail.com"}).then((response)=>console.log(response)).catch((err)=>console.log(err))

contactsModel.updateOne({userid:1},{fname:"johan"}).then((response)=>console.log(response)).catch((err)=>console.log(err))

contactsModel.updateMany({userid:{$gte:0,$lte:2}},{designation:"trainers"}).then((response)=>console.log(response)).catch((err)=>console.log(err))*/








module.exports=contactsModel
/*const document1=new contactsModel({
    fname:"peter",
    phone:283238,
    email:"peter@gmail.com"
})
document1.save().then((res)=>console.log("inserted record successfully")).catch((err)=>console.log("error in create"))*/





