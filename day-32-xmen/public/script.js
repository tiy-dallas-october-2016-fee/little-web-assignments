
var promise = $.ajax({
  url: '/api/x-men'
});

var apiData;
var mutantList = document.querySelector('.mutant-list');

promise.done(function(data) {
  apiData = data;
  //console.log('data', data);

  //console.log(mutantList);

  for (var i = 0; i < data.xmen.length; i++) {
    var mutant = data.xmen[i];
    //console.log('mutant', mutant);

    var li = document.createElement('li');
    li.textContent = mutant.character;
    li.setAttribute('data-index', i);

    mutantList.appendChild(li);
  }
});

mutantList.addEventListener('click', function(evt) {
  console.log(evt.target);
  var attr = evt.target.getAttribute('data-index');
  console.log(attr);

  var currentlySelected = document.querySelector('.selected');
  if (currentlySelected != null) {
    currentlySelected.classList.remove('selected');
  }
  evt.target.classList.add('selected');

  var mutant = apiData.xmen[attr];
  console.log('the mutant', mutant);

  var displayDiv = document.querySelector('.display');
  displayDiv.innerHTML = '';

  var h2 = document.createElement('h2');
  h2.textContent = mutant.realName;
  displayDiv.appendChild(h2);

  var img = document.createElement('img');
  img.src = mutant.imageUrl;
  displayDiv.appendChild(img);

  var description = document.createElement('p');
  description.textContent = mutant.description;
  displayDiv.appendChild(description);

});
