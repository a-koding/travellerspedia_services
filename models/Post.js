const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = mongoose.model('Post',{ 
    author: { type: String,required:true },
    post:{type:String,required:true},
    mentions:{type:Array},
    created_time:{type:Date,required:true,default:Date.now},
    updated_time:{type:Date,required:true,default:Date.now},
    privacy:{type:String,required:true,default:'private'},
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    shares:{type:Number,default:0},
    comments:{type:Array,default:[]},
    location:{type:String,required:true},
    media_attachments :{type:Array,default:[]},
    hashtags:{type:Array},
});

module.exports ={Post}; 