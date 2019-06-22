const mongoose = require('mongoose');
const Comments =require('./Comment.js') 
var Schema = mongoose.Schema;


const Attachment = new Schema({ 
    author: { type: String,required:true },
    parent_id :{type:String},
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    comments:[Comments],
    hashtags:{type:Array},
});


module.exports = {Attachment}; 