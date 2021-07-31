const express = require('express')
const app = express()
const dotenv = require('dotenv')
const axios = require('axios')
const cors = require('cors')
const bodyparser = require('body-parser')


app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
dotenv.config();



//number validation api
app.post('/validate',(req,res)=>{
     
    
    axios.default.get('http://apilayer.net/api/validate?access_key='+process.env.ACCESS_KEY+'&number='+req.body.phone_number+'&country_code='+req.body.code+'&format=1').then((resData)=>{
       res.send(resData.data)

    }).catch((err)=>{
        console.log(err)
    })


})



app.listen(process.env.PORT || 4000,()=>{
    console.log("server is running in http://localhost:4000")
})