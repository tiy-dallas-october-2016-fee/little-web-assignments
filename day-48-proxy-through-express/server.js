var express = require('express');
var request = require('request');
var app = express();

app.use(express.static('public'));

//Here is the path I defined for the custom API to call that will proxy to the external API
app.get('/api/planets', function(req, res) {

  //Call the other API
  request('https://swapi.co/api/planets', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //Send the body of that API response back to the web page.
      res.send(body);
    }
  });

});

app.listen(5004, function() {
  console.log('listening on port 5004');
});
