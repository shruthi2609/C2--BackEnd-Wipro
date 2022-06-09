const assert=require("assert")
const add=require("../addition")
const chai=require("chai")
const chaiAssert=chai.assert
describe("addition test suite",function(){
    it("add test case",function(){
        //assert.strictEqual(add(10,20),30)
        chaiAssert.strictEqual(add(10,20),30)
    })
    it("check return type",function(){
        chaiAssert.typeOf(add(10,20),'number')
    })
})