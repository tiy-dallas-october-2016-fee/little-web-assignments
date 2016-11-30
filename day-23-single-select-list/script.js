




var list = document.querySelector('#list-of-movies');

list.addEventListener('click', function(evt) {

  var currentlySelected = document.querySelector('.selected');
  if (currentlySelected !== null) {
    console.log('turning off previously selected item.');
    currentlySelected.classList.remove('selected');
  }

  // if (currentlySelected === null) {
  //   console.log('no previously selected item.');
  // }
  // else {
  //   console.log('turning off previously selected item.');
  //   currentlySelected.classList.remove('selected');
  // }

  if (evt.target.tagName === 'P') {
    console.log('selecting item parent!');
    evt.target.parentNode.classList.add('selected');
  }
  else {
    console.log('selecting item!');
    evt.target.classList.add('selected');
  }

});
