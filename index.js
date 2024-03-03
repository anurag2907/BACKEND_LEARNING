const express = require('express')
require ('dotenv').config()
// import { Express } from 'express'
// isko ayse bhi likh sakte ha 
// const app = express()
const  anurag = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

anurag.get('/',(req ,res) => {
    res.send("i love my country")
})

anurag.get('/sastablogger',(req,res) => {
    res.send("sasta bolgger is a youtube cahnnel")
})
anurag.get('/login', (req,res) => { 
    res.send('<h1> login kar le bhai</h1>')
})
anurag .listen(process.env.PORT,() => {

    console.log(`example anurag listening on port ${port}`)

})  


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })