const express = require("express")
var app = express()
const route = require('./src/route')
app.get("/",function(request,response){
response.send("Hello World!")
})
app.listen(3000, function () {
console.log("Started application on port %d", 3000)
});
app.use('/callback',route)