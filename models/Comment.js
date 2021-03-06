const mongoose = require('mongoose');  
var Schema = mongoose.Schema;


const Comment = mongoose.model('Comment',{ 
    author: { type: String,required:true },
    parent_id:{type:String},
    parent_type:{type:String},
    comment:{type:String,required:true},
    mentions:{type:Array},
    created_date:{type:Date,required:true,default:Date.now()},
    updated_date:{type:Date},
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    media_attachments :{type:Array},
    hashtags:{type:Array},
    location:{type:String},
    can_comment:{type:Boolean,default:true},
});


module.exports = {Comment}; 