const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/contactsdb").then((res)=>console.log("db is connected")).catch((err)=>console.log("error in connection"))
const schema=mongoose.Schema
const contactsSchema=new schema({
    fname:String,
    phone:Number,
   /* email:{
        type:String,
        required:true
    }*/
    email:String,
    backlogs:Boolean,
  /*  address:{
        type:String,
        default:"IND"
    }*/
})
const contactsModel=mongoose.model("contact",contactsSchema)

module.exports=contactsModel
/*const document1=new contactsModel({
    fname:"peter",
    phone:283238,
    email:"peter@gmail.com"
})
document1.save().then((res)=>console.log("inserted record successfully")).catch((err)=>console.log("error in create"))*/





