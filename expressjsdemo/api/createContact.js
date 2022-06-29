const express=require("express")
const router=express.Router()
const contactsModel=require("../models/mongooseeg")
router.post("/createuser",(req,res)=>{
    const data=req.body
    console.log(data)
    contactsModel.create({
        fname:data.fname,
        phone:data.phone,
        email:data.email,
        backlogs:data.backlogs 
    }).then((success)=>res.send("created successfully")).catch((err)=>{
        console.log(err)
        res.send("insert failed")
    })
})
router.get("/getcontactdetails",async (req,res)=>{
 /* contactsModel.find({}).then((success)=>res.send(success)).catch((err)=>console.log(err))*/
 const result=await contactsModel.find({})
 res.send(result)

  
})
module.exports=router