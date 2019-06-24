const express =require('express');
const mongoose = require('mongoose');
var {Post} =require('../models/Post.js')
var router = express.Router();


router.post('/',(req,res)=>{
   var post= new Post({
          author: req.body.user,
          post:req.body.post,
          privacy:req.body.privacy,
          location:req.body.location,
          media_attachments:req.body.attachments,
       });
       post.save(function(err){
          if(!err)
          {
          res.status(200).send({'Status':'Success','id':post.id});
          return;
          }
          res.status(200).send({'Status':'Error'});
     });






       
});

module.exports=router;