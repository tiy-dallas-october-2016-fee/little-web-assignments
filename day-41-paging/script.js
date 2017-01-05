

var pageNumber = 1;

function makeApiCallsGreatAgain() {
  $.ajax({
    url: 'https://api.github.com/search/users?q=cinderella&page=' + pageNumber
  })
  .done(function(data) {
    console.log('data?', data);

    putStuffHere.innerHTML = '';

    data.items.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item.login;
      putStuffHere.appendChild(li);
    });

  });
}

makeApiCallsGreatAgain();


var putStuffHere = document.querySelector('#put-stuff-here');
var nextButton = document.querySelector('#next-button');

nextButton.addEventListener('click', function() {
  pageNumber += 1;

  makeApiCallsGreatAgain();
});
