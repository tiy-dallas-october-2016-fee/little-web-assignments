

var ken = document.querySelector('.ken');

var position = 1;

setInterval(function() {

  switch (position) {
    case 1:
      ken.classList.remove('frame-5');
      ken.classList.add('frame-1');
      break;
    case 2:
      ken.classList.remove('frame-1');
      ken.classList.add('frame-2');
      break;
    case 3:
      ken.classList.remove('frame-2');
      ken.classList.add('frame-3');
      break;
    case 4:
      ken.classList.remove('frame-3');
      ken.classList.add('frame-4');
      break;
    case 5:
      ken.classList.remove('frame-4');
      ken.classList.add('frame-5');
      break;
  }



  position += 1;

  if (position > 5) {
    position = 1;
  }
}, 100);



/*
Stuff we wrote in class is below here
*/


/* ============================================
simple setTimeout example
============================================ */
setTimeout(function() {
  console.log('hello from timeout');
}, 5000);

/* ============================================
simple setInterval example that is canceled
============================================ */
var id = setInterval(function() {
  //console.log('hello from interval');
}, 1000);

//console.log('interval id', id);

var theButton = document.querySelector('#interval-stopper');
theButton.addEventListener('click', function() {
  clearInterval(id);
});


/* ============================================
Toggle the display of the div every second
============================================ */

var toggleMeDiv = document.querySelector('#toggle-me');

function toggle() {
  toggleMeDiv.classList.toggle('hide');
}

//setInterval(toggle, 1000);

//Contrast with toggling based on a click
toggleMeDiv.addEventListener('click', toggle);

/* ============================================
Growing a div for the fun of it
============================================ */

var growingDiv = document.querySelector('#growing-div');

growingDiv.style.width = '0%';
var width = 0;

var intervalId = setInterval(function() {
  width += 1;
  if (width > 49) {
    clearInterval(intervalId);
  }
  growingDiv.style.width = width + '%';

}, 10);


/* ============================================
Monster
============================================ */

var monster = document.querySelector('.monster');

var position = 1;
var direction = 'right';

setInterval(function() {

  switch (position) {
    case 1:
      //console.log('position 1');
      monster.classList.remove('position-2');
      monster.classList.add('position-1');
      break;
    case 2:
      //console.log('position 2');
      monster.classList.remove('position-1');
      monster.classList.remove('position-3');
      monster.classList.add('position-2');
      break;
    case 3:
      //console.log('position 3');
      monster.classList.remove('position-2');
      monster.classList.add('position-3');
      break;
  }

  if (direction === 'right') {
    position += 1;
  }
  else {
    position -= 1;
  }
  console.log('the position is ', position);

  if (position >= 3) {
    direction = 'left';
  }
  else if (position <= 1) {
    direction = 'right';
  }

}, 500);
