const bodyParser = require('body-parser');
const { json } = require('body-parser');
const express = require('express');
const Post = require('../models/Post')
const router = express.Router();

router.get('/', async (req, res)=>{
    
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
});



router.post('/', async (req, res)=>{

    const post  =    new Post({
        title: req.body.title,
        description: req.body.description


     })

     try{
        const savedPost = await  post.save()
        res.json(savedPost);
     }catch(err){
        res.json({ message: err});
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

router.get('/:postId', async(req, res)=>{
    
   
    
    
    
    
    
    try{
        const post = await Post.findById(req.params.postId );
        res.json(post);

    }catch(err){
        res.json({message: err})
    }
    

 });

 router.delete('/:postId', async(req,res) =>{
    try{
       const deletedPost = await Post.findOneAndDelete({_id: req.params.postId})
       res.json(deletedPost)
       
     
    }catch(err){
       res.json({message: err})

    }

 });

 router.patch('/:postId', async(req, res)=>{
       
    try{

        
        const updatedPost = await  Post.updateOne({_id: req.params.postId}, {title: req.body.title});
        res.json(updatedPost)
    }
    catch(err){
       res.json({message: err})
    }
    


 })


module.exports = router;