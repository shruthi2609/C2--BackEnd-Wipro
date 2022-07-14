const express=require("express")
const router=express.Router()
const UserModel=require("../models/UserModel")
router.get("/getUser/:email",async(req,res)=>{
    const data=req.params.email
    try{
      const result=  await UserModel.findOne({email:data},{password:0})
      console.log(result)
      if(result){
        res.status(200).send(result)
      }
      else{
        res.status(200).send({msg:"no user found"})
      }
    }
    catch(err){
        console.log(err)
    }
})

module.exports=router