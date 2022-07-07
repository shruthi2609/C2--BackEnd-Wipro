const mongoose=require("mongoose")
const Schema=mongoose.Schema
const UserSchema=new Schema({
    email:{
        type:String,
        required:[true,"enter email ! email is mandatory"],
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
    },
    role:{
        type:String,
        enum:{
            values:['admin','trainer','trainee'],
            message:'{VALUE} is not a valid role'
        }
    }
})
const UserModel=mongoose.model("UserModel",UserSchema)

module.exports=UserModel
