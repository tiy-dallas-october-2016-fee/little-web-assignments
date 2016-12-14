
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

var templateTag = document.querySelector('#character-template');
var templateHtml = templateTag.innerHTML;
console.log(templateHtml);

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

  //This is where I am putting it!
  var displayDiv = document.querySelector('.display');

  //I have created HTML!
  var output = Mustache.render(templateHtml, mutant);

  //I put that html in the page!
  displayDiv.innerHTML = output;
});
