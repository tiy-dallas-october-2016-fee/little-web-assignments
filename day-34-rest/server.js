var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

var data = [];

app.get('/api/data', function(req, res) {
  console.log('get happened');
  res.send(data);
});

app.post('/api/data', function(req, res) {
  console.log('post happened', req.body);
  data.push(req.body.word);
  res.send('good job bro!');
});





app.listen(5020, function() {
  console.log('Listening on port 5020');
});
