var express = require('express');
fs = require('js');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var str = fs.readFileSync('index.html', 'utf8');
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
