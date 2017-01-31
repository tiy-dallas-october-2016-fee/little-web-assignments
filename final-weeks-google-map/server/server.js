var express = require('express');
var app = express();

app.use(express.static('public'));


app.get('/api/locations', (req, res) => {
  res.send({
    locations: [
      { lat: -34.397, lng: 150.644 },
      { lat: -34.697, lng: 150.244 },
      { lat: -34.997, lng: 150.444 }
    ]
  })
});

app.listen(5000, function() {
  console.log('listening on port 5000.');
});
