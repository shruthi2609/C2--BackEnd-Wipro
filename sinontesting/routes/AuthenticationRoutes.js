const express=require("express")
const router=express.Router()
const UserModel=require("../models/UserModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const privateKey="jamesbond"
router.post("/signup",async(req,res)=>{
    try{
    const data=req.body
    const user=await UserModel.findOne({email:data.email})
    if(user){
        res.status(404).send({msg:"email already exits",status:false})
    }
   /* const salt=await bcrypt.genSalt(5)
    console.log("salt",salt)
    const hasedpassword=await bcrypt.hash(data.password,salt)
    console.log("hash",hasedpassword)*/
    else{
    const hasedpassword=await bcrypt.hash(data.password,5)
    console.log("hash",hasedpassword)  

    const result=await UserModel.create({
        email:data.email,
        password:hasedpassword,
        phone:data.phone,
        role:data.role
    })
    res.status(201).send({msg:"signup successfull",status:true})
}
    }
catch(err){
    console.log(err)
    res.status(404).send({msg:"unknown error occured",status:false,err:err})
}
})
router.post("/signin",async (req,res)=>{
    const data=req.body
    try{
        const user=await UserModel.findOne({email:data.email})
       if(user){
       const comparison=await bcrypt.compare(data.password,user.password)
       if(comparison){

        const payload={
           email:data.email
        }
        const gentoken=jwt.sign(payload,privateKey,{expiresIn:'1h'})
      /*  const gentoken=jwt.sign({email:data.email},'jamesbond')
       // console.log(token)*/

        res.status(200).send({msg:"login successfull",status:true,token:gentoken})
       }
       else{
        res.status(404).send({msg:"login is notsuccessfull,check your password",status:false})
       }}
       else{
        res.status(404).send({msg:"login is notsuccessfull,email does not exists",status:false})
       }
    }
    catch(err){
        res.status(404).send(err)
    }
})
module.exports=router