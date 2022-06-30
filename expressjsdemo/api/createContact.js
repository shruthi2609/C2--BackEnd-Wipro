const express=require("express")
const router=express.Router()
const contactsModel=require("../models/mongooseeg")
router.post("/createuser",(req,res)=>{
    const data=req.body
    console.log(data)
    contactsModel.create({
        userid:data.userid,
        fname:data.fname,
        email:data.email,
        role:data.role
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

router.get("/getuser/:userid",async (req,res)=>{
    let reqid=req.params.userid
try{
    const result=await contactsModel.findOne({userid:reqid})
    res.send(result)
}
catch(err){
    console.log(err)
    res.send("error in fetch")
}

})
module.exports=router