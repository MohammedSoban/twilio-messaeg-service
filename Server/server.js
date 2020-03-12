const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3002
const config=require("./config")

const client=require("twilio")(config.accontSID,config.authToke)

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/sendCode',(req,res)=>{

    client.verify.services(config.serviceID).verifications.create({
        to:`+${req.query.phonenumber}`,
        channel:'sms'
    })
    .then((data)=>{
        res.status(200).send({ data: data, status: 200 })
    })
    .catch((error)=>{
        res.send(error);
        
    })
})
app.get('/verifyCode',(req,res)=>{
    client.verify.services(config.serviceID).verificationChecks
    .create({
        to:`+${req.query.phonenumber}`,
        code: req.query.code
    })
    .then((data)=>{
        res.status(200).send({ data: data, status: 200 })
      
    })
    .catch((error)=>{
        res.send(error);
        
    })
})

// app.get('/verfiyCode',(req,res)=>{

    // client.verify.services(config.serviceID).verificationChecks.create({
    //     to:`+${req.query.phonenumber}`,
    //     code:req.query.code
    // })
    // .then((data)=>{
    //     res.status(200).send(data)
    // })
   

// })



app.listen(port, () => console.log(`Example app listening on port ${port}!`))