var express = require('express'); 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/DB'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
})
var app=express(); 
app.get('/read', function (req, res) { 
  var key = req.query['keyvalue'];  
  
  

  var data = { 
    "username": key,
    
    
    
} 
db.collection('DB').findOne(data,function(err, aa){ 
    if(err) throw(err);
    console.log(aa);
    
        
}); 
  
}) 
var server = app.listen(3000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
}) 
