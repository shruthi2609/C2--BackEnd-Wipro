const sinon=require("sinon")
const Controllers=require("../controllers/ContactManagerController")
const Contact=require("../models/ContactManager")
//test suite 1
describe("setup for testing",function(){
    let req={
        body:{
           "userid":0,
           "fname":"carry",
           "email":"carry@gmail.com"
        },
        params:{
            id:"62befab190702389cd05d8cf"
        }
    }
    let error=new Error("some error occured")
    let res={}
    let expectedResult
    //test suite 1.1
    describe("check create is working",function(){
        beforeEach(function(){
            res={
                json:sinon.spy(),
                status:sinon.stub().returns({end:sinon.spy()})
            };
            
        })

        it("check create is working or not",function(){
            expectedResult=req.body
            sinon.stub(Contact,'create').yields(null,expectedResult)
            Controllers.createData(req,res)//controller fun
            sinon.assert.calledWith(Contact.create,req.body)// proper inbuilt method
            sinon.assert.calledWith(res.json,sinon.match({fname:req.body.fname}))
            sinon.assert.calledWith(res.json,sinon.match({userid:req.body.userid}))
            sinon.assert.calledWith(res.json,sinon.match({email:req.body.email}))
        })
    })
    describe("check find is working",function(){
        beforeEach(function(){
            res={
                json:sinon.spy(),
                status:sinon.stub().returns({end:sinon.spy()})
            };
            
        })

        it("check find is working or not",function(){
            expectedResult=req.body
            sinon.stub(Contact,'findById').yields(null,expectedResult)
            Controllers.getData(req,res)//controller fun
            sinon.assert.calledWith(Contact.findById,req.params.id)// proper inbuilt method
            sinon.assert.calledWith(res.json,sinon.match({fname:req.body.fname}))
            sinon.assert.calledWith(res.json,sinon.match({userid:req.body.userid}))
            sinon.assert.calledWith(res.json,sinon.match({email:req.body.email}))
        })
    })
})