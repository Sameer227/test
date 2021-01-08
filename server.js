const express  = require('express')
const body = require('body-parser')
const app = express()
app.use(body())

app.get('/',(req,res)=>{
    res.send("okay")
})
const PORT = process.env.PORT || 3000
app.listen(PORT,console.log("Server is running"))



