$.ajax({
  url: '/api/dragonlance'
})
.done(function(data) {

  var ol = document.querySelector('ol');

  for (var i = 0; i < data.characters.length; i++) {
    var character = data.characters[i];

    var li = document.createElement('li');

    var nameDiv = document.createElement('div');
    nameDiv.textContent = character.name;
    nameDiv.classList.add('name');
    li.appendChild(nameDiv);

    var raceDiv = document.createElement('div');
    raceDiv.textContent = 'Race: ' + character.race;
    raceDiv.classList.add('race');
    li.appendChild(raceDiv);

    var descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = character.description;
    li.appendChild(descriptionDiv);

    ol.appendChild(li);
  }
});
