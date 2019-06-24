const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = mongoose.model('Post',{ 
    author: { type: String,required:true },
    mentions:{type:Array},
    created_time:{type:Date},
    updated_time:{type:Date},
    privacy:{type:String,required:true,default:'private'},
    likes:{type:Number,default:0},
    liked_by:{type:Array,default:[]},
    dislikes:{type:Number,default:0},
    disliked_by:{type:Array,default:[]},
    shares:{type:Number,default:0},
    comment:{type:Array,default:[]},
    location:{type:String,required:true},
    media_attachments :{type:Array,default:[]},
    hashtags:{type:Array},
});

module.exports ={Post}; 