console.log('script prepared and ready to embark!');

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function() {
  console.log('attempting to page');
  page += 1;
  requestData();

  previousButton.classList.remove('hidden');
});

var previousButton = document.querySelector('.previous-button');
previousButton.addEventListener('click', function() {

  page -= 1;

  if (page === 1) {
    //hide the previous button
    previousButton.classList.add('hidden');
  }

  requestData();
});




var page = 1;

function requestData() {
  var promise = $.ajax({
    url: 'https://punkapi.com/api/v1/beers?page=' + page,
    headers: {
      "Authorization": "Basic " + btoa('e3b75f89858043c880a68fcef86c0754:')
    },
  });

  promise.done(function(data) {
    console.log('the data', data);

    var beerStuffList = document.querySelector('.beer-stuff');
    var templateScript = document.querySelector('.beer-template');
    var templateHtml = templateScript.innerHTML;

    var html = '';
    for (var i = 0; i < data.length; i++) {
      var beer = data[i];

      var output = Mustache.render(templateHtml, beer);
      html += output;
    }
    beerStuffList.innerHTML = html;
  });
}

requestData();
