const express=require("express")
const server=express()
const bp=require("body-parser")
server.use(bp.json())

const SwaggerJsDoc=require("swagger-jsdoc")
const SwaggerUi=require("swagger-ui-express")
const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Express API with swagger",
            version:"1.0.0",
            description:"simple CRUD with swagger",
            license:{
                name:"MIT"
            }
        },
        servers:[
            {
                url:"http://localhost:3001"
            }
        ]
    },
    apis:["./routes/ContactManagerRoutes.js"]
}
const specs=SwaggerJsDoc(options)
server.use("/api-doc",
SwaggerUi.serve,
SwaggerUi.setup(specs,{explorer:true}))
const authentication=require("./routes/Authentication")
const protectedRoutes=require("./routes/ProtectedRoutes")
server.use("/",authentication)
const mongoose=require("mongoose")
const ContactManagerRoute=require("./routes/ContactManagerRoutes")
mongoose.connect("mongodb://localhost:27017/c2Authentication").then((res)=>console.log("connected to db")).catch((err)=>console.log(err))



server.use("/",ContactManagerRoute)
server.use("/",protectedRoutes)

server.listen(3001,()=>console.log("server started"))


