var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/hello', function(req, res) {
  res.send('hello friend');
});

app.listen(3001, function() {
  console.log('Listening on port 3001');
});
