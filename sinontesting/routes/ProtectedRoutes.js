const express=require("express")
const router=express.Router()
const UserModel=require("../models/UserModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
router.post("/updatepassword",authorize,async (req,res)=>{
    const data=req.body
    try{
    const hashedpassword=await bcrypt.hash(data.upassword,4)
    const updated=await UserModel.findOneAndUpdate({email:req.token.email},{password:hashedpassword})
    console.log(updated)
    if(updated){
        res.status(301).send({msg:"updated successfully",status:true})
    }
    else{
        res.status(404).send({msg:"update failed",status:false})
    }
    
}
    catch(err){
        res.send("updated err")
    }
})

function authorize(req,res,next){
try{
    let reqheader=req.headers['authorization']
    const token=reqheader.replace("Bearer ",'')
    console.log(token)
    const verifiedtoken=jwt.verify(token,'jamesbond')
    req.token=verifiedtoken
    next()
    return 
}
catch(err){
    console.log(err)
    res.send("you are not authorized")
}
}
module.exports=router