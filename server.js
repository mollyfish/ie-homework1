var express = require('express'); 
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var child_process = require('child_process'); 
var port = 8080 || process.env.PORT; 

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());


app.get('/cpuinfo', function(req, res) {
	child_process.exec(path.join(__dirname + '/get-cpu.sh'));
  fs.readFile(path.join(__dirname + '/public/data.json'), function(err, newData){
  	console.log("packet");
  	res.send(newData)
  });
  // child_process.exec(path.join(__dirname + '/delete-json.sh'));
});

app.listen(port, function() { 
  console.log('server up on port ' + port); 
}); 
