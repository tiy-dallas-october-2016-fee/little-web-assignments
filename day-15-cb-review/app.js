var express = require('express');
var reader = require('./story-reader.js');
var eh = require('./canadianer.js')

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/stuff', function(req, res) {

  var cb = function(theFileData) {
    res.render('story', {
      story: theFileData
    });

  }

  reader(cb);
});

app.get('/stuffasjson', function(req, res) {
  var cb = function(theFileData) {
    res.send({
      story: theFileData
    });

  }

  reader(cb);
});

app.get('/ohcanada', function(req, res) {

  var response = eh('I want a steak.');
  

  res.send(response);


});

var port = process.env.PORT || 3070;

app.listen(port, function() {
  console.log('Run that code on port ', port);
});
