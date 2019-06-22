
const express = require('express');
const PostAPI =require('./controllers/PostAPI.js');
var app = express();
app.use('/post',PostAPI);
app.listen(3000,()=>console.log('server started at 3000'));