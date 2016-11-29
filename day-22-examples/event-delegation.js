
//Bad option #1
/*
var first = document.querySelector('#first');
first.addEventListener('click', function() {
  first.classList.toggle('selected');
});

var second = document.querySelector('#second');
second.addEventListener('click', function() {
  second.classList.toggle('selected');
});

var third = document.querySelector('#third');
third.addEventListener('click', function() {
  third.classList.toggle('selected');
});

var fourth = document.querySelector('#fourth');
fourth.addEventListener('click', function() {
  fourth.classList.toggle('selected');
});
*/

//Bad option #1.5
/*
function badClick(evt) {
  evt.target.classList.toggle('selected');
}

var first = document.querySelector('#first');
first.addEventListener('click', badClick);

var second = document.querySelector('#second');
second.addEventListener('click', badClick);

var third = document.querySelector('#third');
third.addEventListener('click', badClick);

var fourth = document.querySelector('#fourth');
fourth.addEventListener('click', badClick);
*/

//Bad option #2
/*
var lis = document.querySelectorAll('li');
for (var i = 0; i < lis.length; i++) {
  var li = lis[i];
  li.addEventListener('click', function(evt) {
    evt.target.classList.toggle('selected');
  });
}
*/

var theUL = document.querySelector('ul');

theUL.addEventListener('click', function(evt) {
  console.log('clicked', evt.target, evt.target.tagName);

  // if (evt.target.tagName === 'LI') {
  //   evt.target.classList.toggle('selected');
  // }

  var display = document.querySelector('#selected-name-display');
  display.textContent = evt.target.textContent;

});
