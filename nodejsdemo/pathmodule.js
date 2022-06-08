const path=require("path")
console.log("dirname",path.dirname("/data/userData.js"))
console.log("base name",path.basename("/data/userData.js",".js"))

const abspath=path.format({
    dir:"data\\js",
    base:"script.js"
})
console.log("nested",abspath)

console.log(path.join("/data","/js","script.js"))

console.log(path.parse("/data/js/script.js"))



