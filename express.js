var express = require('express');
var app = express();
var birds = require('./bird')
app.use('/birds',birds)




var server = app.listen(3000, function () {
   console.log('监听成功');
   
});