const dummy="dummy data"

const sample="sample data"

const userData=[
    {
        fname:"peter",
        email:"peter@gmail.com"
    },
    {
        fname:"john",
        email:"john@gmail.com"
    },

]
function printDetails(uname,uemail){
    console.log(`the user name is ${uname} contact email is ${uemail}`)
}

module.exports={dummy,sample,userData,printDetails}