//create routes

const express = require('express')
//interface router 
const router = express.Router()

//create routing 
router.get('/',(req,res) => {
    res.send('<h1> Hello Express </h1>')
})
//api pass parameter 
router.get('/api/user/:id',(req,res) => {
    res.send(`Hello User id: ${req.params.id}`)
})
//api json format for test 
router.post('/api',(req,res) => {
    //res.send('POST API')
    res.json({name:'prasan',email:'prasan@suvitech.com'})
})

module.exports = router



