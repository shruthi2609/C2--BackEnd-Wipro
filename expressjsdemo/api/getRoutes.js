const express=require("express")
const router=express.Router()

router.get("/getContact",(req,res)=>{
    res.send("dummy get contacts")
})

router.get("/getemail",(req,res)=>{
    res.send("dummy get email")
})

module.exports=router
