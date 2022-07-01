const mongoose=require("mongoose")
const Schema=mongoose.Schema
const ContactSchema=new Schema({
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
        required:true 
    },
    role:String
})
const ContactModel=mongoose.model("ContactModel",ContactSchema)

module.exports=ContactModel
