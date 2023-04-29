const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const categories = require('./data/categories.json')
const news = require('./data/news.json')
app.use(cors())

// root
app.get('/', (req, res)=>{
    res.send('hello from The Dragon News!!!')
})
// category
app.get('/categories', (req,res)=>{
    res.send(categories)
})
// news 
app.get('/news', (req,res)=>{
    res.send(news)
})
// specific news
app.get('/news/:id', (req,res)=>{
    const id = req.params.id
    const specificNews = news.find(n=> n._id === id)
    res.send(specificNews)
})
// same type categories
app.get('/categories/:id', (req,res)=>{
    const id = req.params.id
    if(parseInt(id) === 0){
        res.send(news)
    } else{
        const specificCategories = news.filter(n => n.category_id === id)
        res.send(specificCategories)
    }
})

app.listen(port, ()=>{
    console.log('example of listening server');
})