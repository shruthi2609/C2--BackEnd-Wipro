const express=require("express")
const router=express.Router()
const UserModel=require("../models/UserModel")
const bcrypt=require("bcrypt")
router.post("/signup",async(req,res)=>{
    const data=req.body
   /* const salt=await bcrypt.genSalt(5)
    console.log("salt",salt)
    const hasedpassword=await bcrypt.hash(data.password,salt)
    console.log("hash",hasedpassword)*/
    const hasedpassword=await bcrypt.hash(data.password,5)
    console.log("hash",hasedpassword)  
try{
    const result=UserModel.create({
        email:data.email,
        password:hasedpassword
    })
    res.status(201).send("signup successfull")
}
catch(err){
    res.status(404).send(err)
}
})
module.exports=router