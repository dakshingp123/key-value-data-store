var express = require('express'); 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/DB'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
})
var app=express(); 
app.get('/create', function (req, res) { 
  var name = req.query['username'];  
  
  

  var data = { 
    "username": name,
    
    
    
} 
db.collection('DB').insertOne(data,function(err, collection){ 
  if(err) throw(err);
  console.log('Record Insert Successfully');
        
}); 
  
}) 
var server = app.listen(4000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
}) 
