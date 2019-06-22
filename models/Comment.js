const mongoose = require('mongoose');  
var Schema = mongoose.Schema;


const Comment = new Schema({ 
    author: { type: String,required:true },
    parent_id:{type:String},
    comment:{type:String,required:true},
    mentions:{type:Array},
    created_date:{type:Date,required:true,default:Date.now()},
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    media_attachments :{type:Array},
    hashtags:{type:Array},
    can_comment:{type:Boolean,default:true},
});


module.exports = {Comment}; 