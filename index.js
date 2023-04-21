const express = require('express')
const app = express()
const port = 3000
const categories = require('./data/categories.json')

app.get('/', (req, res)=>{
    res.send('hello world from Bangladesh!')
})
app.get('/categories', (req,res)=>{
    res.send(categories)
})
app.listen(port, ()=>{
    console.log('example of listening server');
})