const assert=require("assert")

describe("sample test suite",function(){
    it("simple test case",function(){
        assert.strictEqual(10,10)//pass
        assert.equal(10,"10") //pass
    })
    
})
