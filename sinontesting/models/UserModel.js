const mongoose=require("mongoose")
const Schema=mongoose.Schema
const UserSchema=new Schema({
    email:{
        type:String,
        required:[true,"enter email ! email is mandatory"],
        unique:true,
        validate:{
            validator:(exp)=>/[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,3}$/.test(exp)
            ,
            message:property=>`${property.value} is not valid`    
        }
    },
    password:{
        type:String,
        required:true,  
    },
    phone:{
        type:Number
    },
    age:{
        type:Number,
        min:[18,"age is less than 18"],
        max:[50,"age should not be greater than 50"]
    },
    role:{
        type:String,
        enum:{
            values:['admin','trainer','trainee'],
            message:'{VALUE} is not a valid role'
        }
    },
    username:{
        type:String,
        minlength:[6,"minlength of password should be 6"],
        maxlength:[10,"minlength of password should be 10"],
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    address:{
        type:String
    }
})
UserSchema.methods.signUp=async function(){
   return await this.save()
}
const UserModel=mongoose.model("UserModel",UserSchema)


module.exports=UserModel
