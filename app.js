const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('home samuel')
})
app.get('/post', (req, res)=>{
    res.send('posts page')
})





app.listen(2000)