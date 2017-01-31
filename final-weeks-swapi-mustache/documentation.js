

$.ajax({
  url: 'http://swapi.co/api/people'
})
.done(function(data) {
  console.log('data', data);

  var template = document.querySelector('#people-api-template').innerHTML;
  var html = Mustache.render(template, data);

  var resultDiv = document.querySelector('.people-api .results');
  resultDiv.innerHTML = html;
})


$.ajax({
  url: 'http://swapi.co/api/planets'
})
.done(function(data) {
  var html = Mustache.render('<div>name: {{name}}</div>', data.results[0]);

  var resultDiv = document.querySelector('.planet-api .results');
  resultDiv.innerHTML = html;
});
