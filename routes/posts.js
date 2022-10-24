const bodyParser = require('body-parser');
const { json } = require('body-parser');
const express = require('express');
const Post = require('../models/Post')
const router = express.Router();

router.get('/', (req, res)=>{
   res.send('We are on posts from routes')
});



router.post('/', async (req, res)=>{

    const post  =    new Post({
        title: req.body.title,
        description: req.body.description


     })

     try{
        const savedPost = await  post.save()
        res.json(savedPost);
     }catch{
        res.json({ message: err})
     }


   













    //res.json(req.body)
    //console.log(req.body)
    // const post = new Post ({
    //     title: req.body.title,
    //     description: req.body.description,
    // });

//    const savedPost = await  post.save()
//         .then(data => {
//             res.json(data);

//         })
//         .catch(err=> {
//             res.json({ message: err})
//         })
        
})

router.get('/specific', (req, res)=>{
    res.send('form specific post')
 });


module.exports = router;