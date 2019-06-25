const express =require('express');
var {Comment} =require('../models/Comment.js');
var {Post} = require('../models/Post.js')
var router = express.Router();

router.post('/',function(req,res){
    var comment= new Comment({
           parent_id:req.body.parent_id,
           parent_type:req.body.parent_type,
           author: req.body.user,
           comment:req.body.comment,
           privacy:req.body.privacy,
           location:req.body.location,
           media_attachments:req.body.attachments,
           can_comment:req.body.can_comment,
        });
        var type= req.body.parent_type;
        console.log(type)
        if(type=='post'){
           Post.findOne({_id:req.body.parent_id},function(err,post){
              if(!err && post){
                 comment.save(function(err){
                  console.log(post)
                  post.comment.push(comment.id);
                  post.save();
                  res.status(200).send({'Status':'Success','id':comment.id});
                  return;
                 });
              }
              else
              res.status(200).send({'Status':'Error','msg':'Invalid parent_id'});
           });
        }
        else
        res.status(200).send({'Status':'Error','msg':'Invalid Request'});   
 });
 
 router.post('/:comment_id',function(req,res){
    Comment.findOne({ _id:req.params.comment_id },function(err,comment){  
           if(!err && comment){
            comment.author=req.body.user;
            comment.comment=req.body.comment;
            comment.privacy=req.body.privacy;
            comment.location=req.body.location;
            comment.media_attachments=req.body.attachments;
            comment.updated_date=Date.now();
            comment.can_comment=req.body.can_comment;
            var type= req.body.parent_type;
            comment.save(function(err){
            res.status(200).send({'Status':'Success','id':comment.id});
            return;
            });
            }
            else
            res.status(200).send({'Status':'Error','msg':'Invalid Comment ID'});   
      });

   });

   module.exports=router;