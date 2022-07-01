const express=require("express")
const router=express.Router()
// const Router require("express").Router
//const router=new Router()
const Controllers=require("../controllers/ContactManagerController")

router.post("/create",Controllers.createUser)

router.get("/fetchuser/:userid",Controllers.fetchUserDetails)

router.get("/fetchall",Controllers.fetchAll)


module.exports=router