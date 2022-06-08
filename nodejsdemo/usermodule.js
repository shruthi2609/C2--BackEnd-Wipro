const {dummy,sample,userData,printDetails}=require("./data/userData")
//const dummy=require("./data/userData")

//console.log(dummy,sample)
console.log(userData)
userData.map((item)=>printDetails(item.fname,item.email))

