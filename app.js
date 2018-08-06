var express = require('express'),
  path = require('path'),
  app = express();

//set the port
app.set('port', 8090);

app.use(express.static(path.join(__dirname, '/dist')));

// Listen for requests
var server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});