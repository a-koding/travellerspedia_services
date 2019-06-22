const mongoose = require('mongoose');
const Attachment =require('./Attachment.js');
const Comment=require('./Comment.js');


const Post = mongoose.model('Post',{ 
    author: { type: String,required:true },
    post:{type:String,required:true},
    mentions:{type:Array},
    created_time:{type:Date,required:true,default:Date.now()},
    updated_time:{type:Date,required:true,default:Date.now()},
    privacy:{type:String,required:true,default:'private'},
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    shares:{type:Number,default:0},
    comments:[Comment],
    location:{type:String,required:true},
    media_attachments :[Attachment],
    hashtags:{type:Array},
});


module.exports = {Post}; 