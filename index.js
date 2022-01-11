//import express 
const express = require('express')
const app = express()

//create routing 
app.get('/',(req,res) => {
    res.send('<h1> Hello Express </h1>')
})
//api pass parameter 
app.get('/api/user/:id',(req,res) => {
    res.send(`Hello User id: ${req.params.id}`)
})



//api json format for test 
app.post('/api',(req,res) => {
    //res.send('POST API')
    res.json({name:'prasan',email:'prasan@suvitech.com'})
})



//run express server 
app.listen(3000,() => {
    console.log('Listening to port 3000')
})

