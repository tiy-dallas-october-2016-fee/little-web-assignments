var gifList = document.querySelector('#gif-list')
var nextButton = document.querySelector('.next');
var previousButton = document.querySelector('.previous');

nextButton.addEventListener('click', function() {
  previousButton.style.display = 'inline';

  page += 1;
  console.log('page is now', page);

  localStorage.setItem('page-number', page);

  loadData();
});

previousButton.addEventListener('click', function() {
  console.log('the page right now at beginning', page);
  if (page === 0) {
    return;
  }

  page -= 1;
  localStorage.setItem('page-number', page);

  loadData();
  hidePreviousButtonWhenOnPageZero();
});

function hidePreviousButtonWhenOnPageZero() {
  if (page === 0) {
    previousButton.style.display = 'none';
  }
}


var page = 0;
var storedValue = localStorage.getItem('page-number');
console.log('page', page, 'stored value', storedValue);

if (storedValue !== null) {
  page = Number(storedValue);
}
hidePreviousButtonWhenOnPageZero();


function loadData() {
  console.log('time to make the donuts for page', page);

  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search?q=megatron&api_key=dc6zaTOxFJmzC&offset=' + page * 25
  })
  .done(function(apiResult) {
    console.log(apiResult);

    gifList.innerHTML = '';

    for (var i = 0; i < apiResult.data.length; i++) {
      var obj = apiResult.data[i];

      var li = document.createElement('li');

      var img = document.createElement('img');
      img.src = obj.images.downsized.url;
      li.appendChild(img);

      gifList.appendChild(li);
    }

  });

}

loadData();






//Examples of functions returning objects and immediately using objects after invocation

function hereIsAFunction() {
  return {
    name: 'Bob'
  };
}

var theDude = hereIsAFunction();
console.log(theDude.name);

console.log(hereIsAFunction().name);


var promise = $.ajax({ url: 'something'});
promise.done(function() {});

$.ajax({ url: 'something'}).done(function() {});
