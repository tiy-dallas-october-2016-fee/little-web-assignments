(function() {

  var getThatDataButton = document.querySelector('.get-data');
  var theList = document.querySelector('.user-list');

  getThatDataButton.addEventListener('click', function() {
    var promise = $.ajax({
      url: 'https://api.github.com/search/users?q=coder'
    });

    promise.done(function(data) {
      console.log('data returned', data);

      for (var i = 0; i < data.items.length; i++) {
        var user = data.items[i];

        var li = document.createElement('li');
        li.textContent = user.login;

        theList.appendChild(li);
      }

    });

    console.log('do we have data?');

  });




})();
