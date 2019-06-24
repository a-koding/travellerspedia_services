
const express = require('express');
const mongoose = require('./db.js');
const PostAPI =require('./controllers/PostAPI.js');
const CommentAPI =require('./controllers/CommentAPI.js')
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use('/post',PostAPI);
app.use('/comment',CommentAPI);
app.listen(3000,()=>console.log('server started at 3000'));