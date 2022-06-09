const chai=require("chai")
const chaiAssert=chai.assert
const chaiExpect=chai.expect
const memberData=require("../memberData")
describe("check memberdata",function(){
    it("check length",function(){
        chaiAssert.lengthOf(memberData,2)  
    })
    it("check property fname",function(){
        for(let i=0;i<2;i++){
            chaiExpect(memberData[i]).to.have.property('fname')
        }
        
    })
})