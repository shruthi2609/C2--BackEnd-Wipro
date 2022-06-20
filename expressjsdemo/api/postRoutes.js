const express=require("express")
const router=express.Router()
router.post("/createUser",(req,res)=>{
    res.send("created")
})
module.exports=router