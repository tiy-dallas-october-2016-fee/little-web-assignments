var names = ['Bob', 'Fred', 'Joan', 'Caligula', 'Trajan'];

var leftButton = document.querySelector('.left-button');
var rightButton = document.querySelector('.right-button');
var display = document.querySelector('.display');

var position = 0;

function updateDisplay() {
  display.textContent = 'Hello, ' + names[position] + '!';
}

updateDisplay();

leftButton.addEventListener('click', function() {
  position--;
  if (position < 0) {
    position = names.length - 1;
  }
  updateDisplay();
});

rightButton.addEventListener('click', function() {
  if (position === names.length - 1) {
    position = 0;
  }
  else {
    position++;
  }
  updateDisplay();
});
