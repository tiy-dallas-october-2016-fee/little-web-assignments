var express = require('express');
var app = express();

app.use(express.static('public'));

app.post('/api/person', function(req, res) {
  console.log('POST happened!');
  res.sendStatus(204);
});

app.listen(5001, function() {
  console.log('Listening on port 5001');
});
