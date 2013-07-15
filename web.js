var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var responseText = '';
	responseText = fs.readFileSync('index.html').toString('utf8');
          
response.send(responseText);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});