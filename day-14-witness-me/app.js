var express  = require('express');
var parser = require('./csv-parser.js');

var app = express();

app.use(express.static('public'));

app.get('/afgan-data', function(req, res) {
  console.log('#1 - request from browser received.');

  var callback = function(outputIsHere) {
    console.log('#8 - We have the data, time to send it to the browser. Callback for app.get("/afgan-data")');
    res.send(outputIsHere);
  }

  console.log('#2 - time to call the parser');
  parser(callback);
  console.log('#5 - having delegated, I am back in the handler and moving on');
});



app.listen(3096, function() {
  console.log('Listening on port 3096 because it is cool');
});
