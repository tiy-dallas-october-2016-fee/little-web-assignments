//call my proxy API
$.ajax({
  url: '/api/planets'
})
.done(function(data) {

  //The data is coming back as a string. Turn it into objects by parsing it as JSON.
  var dataAsObjects = JSON.parse(data);

  var planetsUL = document.querySelector('#planets');

  dataAsObjects.results.forEach(function(planet) {
    console.log('planet', planet);
    var li = document.createElement('li');
    li.textContent = planet.name;
    planetsUL.appendChild(li);
  });

});
