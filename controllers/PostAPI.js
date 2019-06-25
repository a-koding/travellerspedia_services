const express =require('express');
var {Post} =require('../models/Post.js');
var {Comment} =require('../models/Comment.js');
var router = express.Router();


router.post('/',function(req,res){
   var post= new Post({
          author: req.body.user,
          post:req.body.post,
          privacy:req.body.privacy,
          location:req.body.location,
          media_attachments:req.body.attachments,
          created_time:Date.now(),
       });
       post.save(function(err){
          if(!err)
          {
          res.status(200).send({'Status':'Success','id':post.id});
          return;
          }
          console.log(err)
          res.status(200).send({'Status':'Error'});
     });   
});

router.post('/:post_id',function(req,res){
     Post.findOne({_id:req.params.post_id},function(err,post){
          if(post){
          post.author= req.body.user,
          post.post=req.body.post,
          post.privacy=req.body.privacy,
          post.location=req.body.location,
          post.media_attachments=req.body.attachments,
          post.updated_time=Date.now(),
          post.save(function(err){
          if(!err)
          {
          res.status(200).send({'Status':'Success','id':post.id});
          return;
          }
          res.status(200).send({'Status':'Error'});
          });
          }
          else
               res.status(200).send({'Status':'Error'});
     });
  });

  router.get('/:post_id',function(req,res){
     Post.findOne({_id:req.params.post_id},function(err,post){
     var result={};
     if(post){
          result.id=post.id;
          result.post=post.post;
          result.privacy=post.privacy;
          result.attachments=post.media_attachments;
          result.mentions=post.mentions;
          result.likes=post.likes;
          result.dislikes=post.dislikes;
          result.comments=[]
          Comment.find({'_id':{ $in : post.comment }},function(err,comments){
               if(!err)
               console.log(comments)
          });
          res.status(200).send({'Status':'Success','post':result});
     }
     else
     res.status(200).send({'Status':'Error'});
  });
  

});


module.exports=router;