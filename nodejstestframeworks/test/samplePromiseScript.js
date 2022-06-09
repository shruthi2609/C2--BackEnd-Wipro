const assert=require("assert")
const asyncEg=require("../samplePromises")
describe("promise",function(){
    it("test resolve",function(){
       return asyncEg().then((res)=>assert.strictEqual(res,true))
    })
})