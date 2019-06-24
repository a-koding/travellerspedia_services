const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const Attachment = new Schema({ 
    author: { type: String,required:true },
    parent_id :{type:String},
    parent_type:{type:String},
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    comments:{type:Array,default:[]},
    hashtags:{type:Array},
});


module.exports = {Attachment}; 