var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(5491, function() {
  console.log('listening on port 5491.');
});
