
var clickMeButton = document.querySelector('#click-me');

//console.log(clickMeButton);

clickMeButton.addEventListener('click', function() {
  console.log('lol, an event listener');
});

function clicky(evt) {
  console.log('other function', evt.target);
  evt.target.textContent = 'I have been clicked';

  var putStuffHereSection = document.querySelector('#put-stuff-here');
  putStuffHereSection.innerHTML = '<p>I change things</p>'

}

clickMeButton.addEventListener('click', clicky);

clickMeButton.addEventListener('touchstart', function(evt) {
  console.log('new event', evt.offsetX);
});
