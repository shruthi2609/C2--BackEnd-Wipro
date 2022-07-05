/**
*  @swagger
*   components:
*     schemas:
*       Contact:
*         type: object
*         required:
*           - fname
*           - email
*         properties:
*           fname:
*             type: string
*             description: fname of the user
*           email:
*             type: string
*             description: email of the user
*           phone:
*             type: string
*             description: mobile number
*         example:
*            fname: Cary
*            email: carry@gmail.com 
*            phone: 293892382
*/
/**
* @swagger
*paths:
*  "/create":
*    post:
*      summary: add a new user
*      requestBody:
*        description: required a desc
*        required: true
*        content:
*          application/json:
*            schema:
*              "$ref": "#/components/schemas/Contact"
*      responses:
*        '201':
*          description: Created user
*        '404':
*          description: not able to create
*/
/**
* @swagger
*paths:
*  "/fectchall":
*    get:
*      summary: get all user
*      responses:
*        '200':
*          description: fetched user
*          content:
*            application/json: 
*              schema:
*                "$ref": "#/components/schemas/Contact"
*        '404':
*          description: cant fetch
*/
/**
* @swagger
*   "/fetchuser/{userid}":
*     get:
*       summary: Gets a book by id
*       tags: [Contacts]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: The user id
*       responses:
*         "200":
*           description: The list of user.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Contact'
*         "404":
*           description: user not found.
*/
const express=require("express")
const router=express.Router()
// const Router require("express").Router
//const router=new Router()
const Controllers=require("../controllers/ContactManagerController")

router.post("/create",Controllers.createUser)



router.get("/fetchuser/:userid",Controllers.fetchUserDetails)

router.get("/fetchall",Controllers.fetchAll)


module.exports=router