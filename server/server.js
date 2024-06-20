const express = require("express")
const mongoose = require('mongoose');
const userRoute = require('./src/routes/user.route')
var app = express()
require('dotenv').config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get("/",function(request,response){
response.send("Hello World!")
})
app.use(express.json());
app.use('/api', userRoute)

app.listen(3000, function () {
console.log("Started application on port %d", 3000)
});
