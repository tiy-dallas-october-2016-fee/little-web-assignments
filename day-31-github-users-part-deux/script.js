(function() {

  var theList = document.querySelector('.user-list');

  var promise = $.ajax({
    url: 'https://api.github.com/search/users?q=megatron'
  });

  promise.done(function(data) {
    console.log('data back!', data);

    for (var i = 0; i < data.items.length; i++) {
      var user = data.items[i];
      console.log('the user', user);

      var li = document.createElement('li');

      var anchor = document.createElement('a');
      anchor.textContent = user.login;
      anchor.href = user.html_url;
      li.appendChild(anchor);

      var img = document.createElement('img');
      img.src = user.avatar_url;
      li.appendChild(img);

      theList.appendChild(li);
    }

  });

})();
