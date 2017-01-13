var request = require('request');
request('https://swapi.co/api/planets/', function (error, response, body) {
  console.log('status code', response.statusCode);
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
