var express = require('express'); 
var app = express(); 
 
var port = 3000 || process.env.PORT; 

app.use(express.static(__dirname + '/public')); 
 
app.listen(port, function() { 
  console.log('server up on port ' + port); 
}); 
