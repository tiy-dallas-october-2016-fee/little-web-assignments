console.log('script prepared and ready to embark!');

console.log('look at this', btoa('hello'));
console.log('look at this too - ', atob('aGVsbG8='));

var promise = $.ajax({
  url: 'https://punkapi.com/api/v1/beers',
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
