//import express 
const express = require('express')
const app = express()

//import router from router  
const urlRouter = require('./routes/url')
//call and use router  
app.use('',urlRouter)




//run express server 
app.listen(3000,() => {
    console.log('Listening to port 3000')
})

