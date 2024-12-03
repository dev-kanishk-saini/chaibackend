const express = require('express')
//import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('start deploying')
})
app.get('/login',(req, res) =>{
    res.send('0establishing  ')
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})