var express = require('express');

//need this to parse the body
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express();

//what kind of data to parse and how
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

//Need to store that data!
var data = [];

//This function receives the post
app.post('/post/to/here', function(req, res) {
  console.log('body', req.body);

  data.push({
    firstName: req.body['first-name'],
    lastName: req.body['last-name'],
    bio: req.body['bio']
  });

  console.log('now I have this data', data);

  res.send('okey dokey');
});

app.get('/showmethedata', function(req, res) {
  res.render('table', {
    people: data
  });
});


app.listen(3645, function() {
  console.log('listening at port 3645');
});
