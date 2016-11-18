var express  = require('express');
var parser = require('./csv-parser.js');

var app = express();


/* ===============================================
  Configure stuff
=============================================== */

app.use(express.static('public'));

// Configures express to use ejs as its view engine
app.set('view engine', 'ejs');





/* ===============================================
  Define path for returning raw JSON data
=============================================== */

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







/* ===============================================
  Define path for returning HTML via EJS
=============================================== */

app.get('/afgan-html', function(req, res) {

  var callback = function(outputIsHere) {
    res.render('data-page', outputIsHere);
  }

  parser(callback);
});




/* ===============================================
  Listen up!
=============================================== */

console.log('process.env', process.env);

var port = process.env.PORT || 3096;

app.listen(port, function() {
  console.log('Listening on port 3096 because it is cool');
});
