const ContactModel=require("../models/ContactManager")
let Controllers={}

Controllers.createUser=function(req,res){
const data=req.body
ContactModel.create({
    userid:data.userid,
    fname:data.fname,
    email:data.email,
    role:data.role
}).then((result)=>res.send("created successfully")).catch((err)=>res.send(err))
}

Controllers.fetchUserDetails= async function(req,res){
try{
    const reqid=req.params.userid
    const result=await ContactModel.find({userid:reqid})
    res.send(result)
}
catch(err){
    res.send(err)
}

}

Controllers.fetchAll=async function(req,res){
    try{
    
    const result=await ContactModel.find({})
    res.send(result)
}

catch(err){
    res.send(err)
}

}


module.exports=Controllers
